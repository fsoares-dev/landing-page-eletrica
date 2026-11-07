/**
 * Skill / Checker: WCAG 2.1 AA Basic Accessibility Checker
 */
export function auditAccessibility(domDocument) {
  const violations = [];

  // 1. Checagem de atributos lang
  const htmlTag = domDocument.querySelector('html');
  if (!htmlTag || htmlTag.getAttribute('lang') !== 'pt-BR') {
    violations.push("Tag <html> deve possuir lang='pt-BR'.");
  }

  // 2. Aninhamento inválido de tags interativas
  const buttonInsideAnchor = domDocument.querySelectorAll('a button, button a');
  if (buttonInsideAnchor.length > 0) {
    violations.push("Detectado elemento <button> aninhado dentro de <a> (ou vice-versa). Use classes CSS em tags <a>.");
  }

  // 3. Imagens com alt ausente
  const imagesWithoutAlt = domDocument.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    violations.push(`${imagesWithoutAlt.length} imagem(ns) encontrada(s) sem atributo alt.`);
  }

  // 4. Inputs com label associado
  const inputs = domDocument.querySelectorAll('input:not([type="hidden"]), select, textarea');
  inputs.forEach(input => {
    const id = input.getAttribute('id');
    if (!id || !domDocument.querySelector(`label[for="${id}"]`)) {
      violations.push(`Campo de formulário sem <label> associado (id="${id || 'sem-id'}").`);
    }
  });

  return {
    passed: violations.length === 0,
    violations
  };
}