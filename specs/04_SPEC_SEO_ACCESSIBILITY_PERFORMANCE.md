# Spec 04: SEO Local, Schema.org, Acessibilidade e Performance

## 1. Escopo & Objetivos
Garantir pontuação superior a 95 no Google PageSpeed Insights, validação WCAG 2.1 AA e indexação com destaque no Google Local (Google Meu Negócio / Maps).

## 2. Requisitos Técnicos
1. **Metadados e Open Graph:**
   - `<html lang="pt-BR">`
   - Meta description com palavras-chave de intenção de busca local: "Eletricista em Blumenau e região DDD 47. Instalações elétricas residenciais, prediais e industriais seguras com certificação NR-10. Orçamento sem compromisso."
   - `og:title`, `og:description`, `og:image`, `og:type="website"`, `twitter:card`.
2. **Dados Estruturados JSON-LD (Schema.org):**
   - Configuração de entidade `Electrician` / `HomeAndConstructionBusiness`:
     - `@type`: `Electrician`
     - `name`: `Soares Instalações Elétricas`
     - `telephone`: `+5547991054858`
     - `email`: `eletricasoares15@gmail.com`
     - `addressLocality`: `Blumenau`
     - `addressRegion`: `SC`
     - `addressCountry`: `BR`
     - `priceRange`: `$$`
3. **Performance (Core Web Vitals):**
   - Imagens em formato moderno `.webp` ou `.avif` com atributos de largura e altura declarados.
   - Carregamento prioritário no Hero (`fetchpriority="high"`), e `loading="lazy"` em todas as imagens subsequentes.
   - Sem fontes externas pesadas ou bloqueantes (priorizar System Font Stack ou preconnect otimizado).