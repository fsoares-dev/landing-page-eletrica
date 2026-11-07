# Contexto do Sistema e Diretrizes Gerais (SDD)

## 1. Visão Geral do Projeto
- **Projeto:** Refatoração e Modernização da Landing Page institucional e de conversão.
- **Cliente:** Soares Instalações Elétricas (Blumenau / Região Vale do Itajaí - DDD 47, SC).
- **Missão:** Construir uma landing page de alta conversão (CRO), extremamente rápida (Core Web Vitals 95+), totalmente acessível (WCAG 2.1 AA) e com foco em geração de leads via WhatsApp e Telefone.
- **Stack Tecnológica:** HTML5 Semântico, CSS3 Moderno (Vanilla com Design Tokens / CSS Custom Properties), JavaScript Vanilla leve (módulos ES6 sem frameworks pesados), Vite para build e automação de assets.

## 2. Padrões de Engenharia (SDD & TDD)
- **Spec-Driven Development (SDD):** Cada módulo possui sua própria especificação contendo requisitos funcionais, critérios de aceitação e testes automatizados. Nenhuma feature é implementada sem atender rigorosamente à respectiva spec.
- **Maker-Checker Workflow:**
  - *Main Agent (Orquestrador):* Coordena as fases, valida os contratos de interface e a integração end-to-end.
  - *Sub-Agent (Implementer / Maker):* Implementa arquivos HTML/CSS/JS conforme as specs detalhadas.
  - *Sub-Agent (Auditor / Checker):* Executa bateria de testes (Playwright/Jest), audits de acessibilidade (axe-core) e validação de contraste/CRO.
- **Filosofia TDD / Testes Automatizados:**
  - Testes E2E e de integração cobrindo fluxos críticos de clique (links de WhatsApp com codificação de texto correta, menu hambúrguer interativo, acordeão de FAQ, formulário de contato).

## 3. Diretrizes de Design & CRO
- **Paleta de Cores:**
  - `--color-primary`: `#0284C7` (Azul Elétrico vibrante com contraste adequado)
  - `--color-primary-dark`: `#0369A1` (Hover e rodapé)
  - `--color-secondary`: `#0F172A` (Slate escuro para tipografia e autoridade técnica)
  - `--color-accent-whatsapp`: `#22C55E` (Verde conversão oficial)
  - `--color-accent-whatsapp-hover`: `#16A34A`
  - `--color-bg-light`: `#F8FAFC`
  - `--color-surface`: `#FFFFFF`
- **Contatos Oficiais:**
  - Telefone / WhatsApp: `(47) 9 9105-4858` -> `5547991054858`
  - E-mail: `eletricasoares15@gmail.com`
  - Região de Atendimento: Vale do Itajaí / DDD 47 (Santa Catarina)