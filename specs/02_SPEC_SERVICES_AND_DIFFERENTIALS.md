# Spec 02: Grade de Serviços, Selos de Segurança e Diferenciais

## 1. Escopo & Objetivos
Substituir o grid quebrado anterior por um layout responsivo em CSS Grid/Flexbox sem overflow horizontal em telas a partir de 320px. Apresentar os 3 pilares de serviço e os diferenciais técnicos.

## 2. Requisitos Funcionais
1. **Selos de Segurança & Credibilidade (Trust Badges):**
   - Faixa logo abaixo da Hero com 4 pilares:
     1. "Certificação NR-10 e NR-35" (Trabalho seguro em eletricidade e altura).
     2. "Garantia Formal por Escrito" (Garantia de conformidade pós-serviço).
     3. "Emissão de Nota e Laudo Técnico".
     4. "Atendimento Especializado DDD 47".
2. **Cards de Serviços:**
   - **Residencial:** Iluminação moderna, quadros de distribuição, disjuntores DR, troca de fiação antiga, tomadas para ar-condicionado.
   - **Predial & Condomínios:** Manutenção preventiva para síndicos, adequação padrão Celesc/concessionária, bombas, iluminação de emergência.
   - **Comercial & Pequena Indústria:** Infraestrutura de perfilados e eletrocalhas, comandos elétricos, balanceamento de cargas, nobreaks e geradores.
   - Cada card possui botão próprio direcionando ao WhatsApp com mensagem específica do serviço:
     Exemplo Residencial: `...text=Gostaria%20de%20or%C3%A7amento%20para%20Instala%C3%A7%C3%A3o%20Residencial`
3. **Seção de Diferenciais ("Por que a Soares?"):**
   - Transparência orçamentária (sem surpresas no valor final).
   - Limpeza e organização durante e após a execução do serviço.
   - Ferramental calibrado e materiais normatizados (NBR 5410).

## 3. Critérios de Aceitação
- Nenhum container pode ter `width` fixa em pixels (`width: 400px` é estritamente proibido; usar `max-width: 400px; width: 100%;`).
- Espaçamento de clique touch-friendly mínimo de 48px x 48px para botões.