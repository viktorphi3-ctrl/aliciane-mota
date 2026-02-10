# CONTEXT.md - Dra. Aliciane Mota (Redesign "Medical Boutique")

## Project Vision
Redesign do site da Dra. Aliciane Mota (Otorrino/Sono).
A estética deve migrar de "Dark Mode Pesado" para "Medical Boutique/Private Banking".
Referências: Rothschild & Co, Wealth Management.
Sensação desejada: Autoridade, Elegância Atemporal, Acolhimento Premium.

## Tech Stack (Non-Negotiable)
- **Framework:** Astro 5.0 (Static Site Generation)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React (linhas finas, elegantes)
- **Animations:** AOS (Animate On Scroll) ou Tailwind Motion (sutis, apenas fade-ins)

## Design System Guidelines
- **Color Palette:**
  - Primary: `Navy Blue` (#0F172A ou similar) - Autoridade.
  - Background: `Warm Beige/Off-White` (#FDFBF7) - Acolhimento/Papel.
  - Accent: `Muted Gold` (#C5A059) - Detalhes finos/linhas.
  - Text: `Charcoal` (#334155) - Legibilidade suave.
- **Typography:**
  - Headings: `Playfair Display` ou `Cinzel` (Serifada, clássica).
  - Body: `Lato` ou `Inter` (Sans-serif, moderna, alta legibilidade).
- **UI Components:**
  - Cards com bordas arredondadas suaves (radius-lg ou xl).
  - Sombras difusas e muito suaves (shadow-sm).
  - Imagens com máscaras arredondadas ou aspecto editorial.

## Functional Scope (MVP)
1.  **Header "Elite":** Logo centralizado ou esquerda, menu limpo, botão "Agendar" discreto mas visível (outline style).
2.  **Hero Section:** Foto editorial dela (ou ambiente), Headline Serifada grande, Subtítulo curto.
3.  **Bento Grid de Especialidades:** Em vez de lista, uma grade de cartões elegantes (Ex: "Cirurgia do Ronco", "Medicina do Sono") com ícones minimalistas.
4.  **Seção "A Dra. Aliciane":** Layout dividido (Foto esquerda / Texto direita) com assinatura visual.
5.  **Social Proof:** Carrossel minimalista de depoimentos.
6.  **Rodapé Institucional:** Mapa em tom pastel (estilizado), links rápidos, copyright elegante.

## Content Management
- Conteúdo (textos e dados dos serviços) deve ser separado em arquivos `.json` ou `.md` na pasta `src/content` para fácil edição sem tocar no código.