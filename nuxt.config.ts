import tailwindcss from '@tailwindcss/vite'
import catalogPtBr from './app/locales/pt-BR/catalog.json'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      routes: catalogPtBr.competencies.map((c) => `/competencies/${c.slug}`),
    },
  },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'UniCode Students',
      meta: [
        {
          name: 'description',
          content:
            'Competências de Sistemas de Informação (UNIFACISA) com resumos, exemplos de código e questões do LeetCode resolvidas.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap',
        },
      ],
    },
  },
})
