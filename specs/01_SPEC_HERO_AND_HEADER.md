# Spec 01: Topbar, Header Responsivo e Hero Section

## 1. Escopo & Objetivos
Implementar a barra de aviso de emergência, navegação fixa acessível com menu hambúrguer mobile, e seção Hero de alto impacto visual e alta conversão CRO.

## 2. Requisitos Funcionais
1. **Top Bar de Atendimento:**
   - Exibir badge com aviso: "⚡ Atendimento Rápido e Emergencial em Blumenau e Vale do Itajaí (DDD 47)".
   - Link de discagem direta: `tel:+5547991054858`.
2. **Header & Navegação:**
   - Logotipo da Soares Instalações com fallback semântico e dimensões explícitas para evitar CLS.
   - Menu desktop com links âncora: `#inicio`, `#servicos`, `#sobre`, `#depoimentos`, `#faq`, `#contato`.
   - Botão de CTA no header desktop: "Solicitar Orçamento" apontando para o WhatsApp com texto pré-definido.
   - Menu mobile hambúrguer com atributos `aria-expanded="false"`, `aria-controls="nav-menu"`, fechando automaticamente ao clicar em qualquer âncora ou fora do container.
3. **Hero Section:**
   - H1: "Instalações Elétricas Seguras e Sem Dor de Cabeça para Sua Casa ou Empresa".
   - Subtítulo com foco em conformidade (NR-10 e NR-35) e garantia de serviço.
   - CTA primário em verde WhatsApp com ícone SVG integrado: "Solicitar Orçamento Grátis via WhatsApp".
   - URL do WhatsApp: `https://wa.me/5547991054858?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Soares%20Instala%C3%A7%C3%B5es%20e%20gostaria%20de%20um%20or%C3%A7amento.`
   - Micro-provas abaixo do CTA: "✓ Resposta em até 30 min • ✓ Visita técnica sem taxa oculta • ✓ Profissionais certificados".

## 3. Critérios de Aceitação (Gherkin)
```gherkin
Cenário: Interação com o menu mobile
  Dado que o usuário está visualizando a página em viewport de 375px
  Quando clica no botão com id "menu-toggle"
  Então o atributo "aria-expanded" deve mudar para "true"
  E o container "#nav-menu" deve receber a classe "active"
  Quando o usuário clica em um link interno "#servicos"
  Então o menu deve fechar e o atributo "aria-expanded" deve voltar a "false"

Cenário: Validação do CTA Principal do Hero
  Dado que o usuário visualiza o botão principal do Hero
  Quando o link é inspecionado
  Então deve possuir target="_blank" e rel="noopener noreferrer"
  E o parâmetro "text" deve estar percent-encoded sem erros de sintaxe
```