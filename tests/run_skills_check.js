import fs from 'fs';
import { validateConversionLinks } from '../skills/cro_validator.js';
import { auditAccessibility } from '../skills/accessibility_checker.js';

const html = fs.readFileSync('index.html', 'utf-8');
const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, '');

const elements = [];
const stack = [];
const voidTags = new Set(['meta', 'link', 'img', 'input', 'br', 'hr', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr']);
const tagRegex = /<\/?([a-zA-Z0-9]+)\b([^>]*)>/g;
let match;

while ((match = tagRegex.exec(cleanHtml)) !== null) {
  const fullMatch = match[0];
  const tagName = match[1].toLowerCase();
  const attrStr = match[2] || '';
  const isClosing = fullMatch.startsWith('</');
  const isSelfClosing = fullMatch.endsWith('/>') || voidTags.has(tagName);

  if (!isClosing) {
    const attrs = {};
    const regex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    let m;
    while ((m = regex.exec(attrStr)) !== null) {
      attrs[m[1].toLowerCase()] = m[2] !== undefined ? m[2] : (m[3] !== undefined ? m[3] : (m[4] !== undefined ? m[4] : ''));
    }
    const el = {
      tagName,
      attrs,
      ancestors: stack.map(s => s.tagName),
      getAttribute(name) {
        return Object.prototype.hasOwnProperty.call(this.attrs, name.toLowerCase()) ? this.attrs[name.toLowerCase()] : null;
      }
    };
    elements.push(el);
    if (!isSelfClosing) stack.push(el);
  } else {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i].tagName === tagName) {
        stack.splice(i);
        break;
      }
    }
  }
}

function matchSingleSelector(el, sel) {
  sel = sel.trim();
  if (sel === 'html') return el.tagName === 'html';
  if (sel === 'a[href*="wa.me"]') return el.tagName === 'a' && el.getAttribute('href') && el.getAttribute('href').includes('wa.me');
  if (sel === 'a button') return el.tagName === 'button' && el.ancestors.includes('a');
  if (sel === 'button a') return el.tagName === 'a' && el.ancestors.includes('button');
  if (sel === 'img:not([alt])') return el.tagName === 'img' && el.getAttribute('alt') === null;
  if (sel === 'input:not([type="hidden"])') return el.tagName === 'input' && el.getAttribute('type') !== 'hidden';
  if (sel === 'select') return el.tagName === 'select';
  if (sel === 'textarea') return el.tagName === 'textarea';
  const labelForMatch = sel.match(/^label\[for="([^"]+)"\]$/);
  if (labelForMatch) return el.tagName === 'label' && el.getAttribute('for') === labelForMatch[1];
  return el.tagName === sel.toLowerCase();
}

const dom = {
  querySelectorAll(selectorGroup) {
    const selectors = selectorGroup.split(',').map(s => s.trim());
    return elements.filter(el => selectors.some(sel => matchSingleSelector(el, sel)));
  },
  querySelector(selectorGroup) {
    const res = this.querySelectorAll(selectorGroup);
    return res.length > 0 ? res[0] : null;
  }
};

const cro = validateConversionLinks(dom);
const a11y = auditAccessibility(dom);

console.log('CRO Validator:', JSON.stringify(cro));
console.log('A11Y Checker:', JSON.stringify(a11y));

if (!cro.valid || !a11y.passed) {
  process.exit(1);
}

