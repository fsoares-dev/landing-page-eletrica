# Spec 03: Prova Social, FAQ Acordeão, Formulário e Botão Flutuante

## 1. Escopo & Objetivos
Construir os elementos de fechamento de venda: avaliações de clientes, quebra de objeções (FAQ), formulário semântico com validação e botão flutuante persistente do WhatsApp.

## 2. Requisitos Funcionais
1. **Depoimentos (Social Proof):**
   - 3 depoimentos estilizados com rating de 5 estrelas (SVG), nome do cliente e tipo de serviço realizado (Ex: "Síndico Residencial das Flores", "Proprietário Residencial", "Comércio Local").
2. **FAQ com Acordeão Acessível:**
   - Utilizar tag nativa `<details>` e `<summary>` com estilização moderna para acessibilidade zero-JS (ou micro-JS para fechar os irmãos).
   - Perguntas:
     - "Como funciona o agendamento de visitas técnicas?"
     - "Vocês emitem nota fiscal e laudo de conformidade?"
     - "Quais são as formas de pagamento aceitas?"
     - "Qual a região exata atendida?"
3. **Formulário de Contato Direto:**
   - Campos: Nome completo, Telefone/WhatsApp com máscara básica, Tipo de Imóvel (select), Descrição do problema.
   - Botão "Enviar Solicitação" com opção de fallback via `mailto:` ou redirecionamento direto dos parâmetros para a URL do WhatsApp.
4. **Botão Flutuante do WhatsApp:**
   - Fixo no canto inferior direito (`position: fixed; bottom: 24px; right: 24px; z-index: 1000;`).
   - SVG nítido do WhatsApp, tooltip flutuante no desktop e animação de pulso sutil sem poluir visualmente.

## 3. Critérios de Aceitação
- Todos os campos do formulário possuem `<label for="...">` devidamente associados aos `<input id="...">`.
- Tecla Enter ou clique no `<summary>` abre e fecha a resposta correspondente sem quebra de layout.