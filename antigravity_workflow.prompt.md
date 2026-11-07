# Prompt de Orquestração Antigravity (Maker-Checker SDD)

Copie e execute este prompt no seu ambiente Antigravity para guiar o Main Agent e Subagents na refatoração completa do projeto:

```markdown
Você atuará como Main Agent Orchestrator seguindo a metodologia Spec-Driven Development (SDD) e TDD para refatorar a Landing Page da "Soares Instalações Elétricas".

### Suas Diretrizes de Orquestração:
1. **Leia os arquivos em /specs/:**
   - 00_SYSTEM_CONTEXT.md
   - 01_SPEC_HERO_AND_HEADER.md
   - 02_SPEC_SERVICES_AND_DIFFERENTIALS.md
   - 03_SPEC_SOCIAL_PROOF_FAQ_AND_CONTACT.md
   - 04_SPEC_SEO_ACCESSIBILITY_PERFORMANCE.md

2. **Atribua as tarefas para os Subagents:**
   - **Subagent Maker (Frontend Coder):**
     - Criar `index.html` limpo, semântico e com as tags Schema.org JSON-LD configuradas.
     - Criar `style.css` utilizando CSS Custom Properties (--color-primary, etc.), Flexbox, CSS Grid sem largura fixa (`width: 400px` PROIBIDO) e foco em visual profissional.
     - Criar `script.js` com o toggle do menu hambúrguer, scroll suave e fechamento automático do menu mobile.
   - **Subagent Checker (Auditor de Acessibilidade & CRO):**
     - Executar as skills em `/skills/cro_validator.js` e `/skills/accessibility_checker.js`.
     - Validar que nenhum elemento `<button>` esteja aninhado dentro de `<a>`.
     - Garantir que todos os botões de CTA apontem para `https://wa.me/5547991054858` com query param de texto descritivo e codificado.
     - Rodar a suite em `/tests/e2e_landing_page.spec.js`.

3. **Critério de Conclusão:**
   - O projeto só é considerado pronto quando 100% dos testes e critérios das specs forem cumpridos sem regressão visual e sem overflow horizontal em telas móveis (360px a 430px).
```