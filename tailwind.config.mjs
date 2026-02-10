/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            colors: {
                navy: {
                    900: '#0f172a',
                },
                beige: {
                    50: '#FDFBF7',
                },
                'brand-navy': '#0B162C',
                'brand-gold': '#D4AF37',
                'bronze': {
                    500: '#B8977E',
                    600: '#A6866D',
                },
                'surface-light': '#FDFBF7',
                'text-main': '#1A202C',

            }
        },
    },
    plugins: [],
}
