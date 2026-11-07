/**
 * Skill / Checker: CRO & Link Integrity Validator
 * Valida se todos os links de conversão respeitam a sintaxe do WhatsApp e os padrões de CRO
 */
export function validateConversionLinks(domDocument) {
  const issues = [];
  const whatsappLinks = domDocument.querySelectorAll('a[href*="wa.me"]');

  if (whatsappLinks.length === 0) {
    issues.push("Nenhum link de WhatsApp encontrado na página.");
  }

  whatsappLinks.forEach((link, idx) => {
    const href = link.getAttribute('href');
    if (!href.includes('5547991054858')) {
      issues.push(`Link ${idx + 1} não contém o número correto (47 99105-4858).`);
    }
    if (!href.includes('text=')) {
      issues.push(`Link ${idx + 1} não contém mensagem pré-preenchida de lead.`);
    }
    if (link.getAttribute('target') !== '_blank') {
      issues.push(`Link ${idx + 1} deve abrir em nova aba (target="_blank").`);
    }
    if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
      issues.push(`Link ${idx + 1} requer rel="noopener noreferrer" para segurança.`);
    }
  });

  return {
    valid: issues.length === 0,
    issues
  };
}