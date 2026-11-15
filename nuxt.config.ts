import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Biblioteca de Conhecimento — SI UNIFACISA',
      meta: [
        {
          name: 'description',
          content:
            'Biblioteca aberta e curada de conhecimento por competência para alunos de Sistemas de Informação da UNIFACISA.',
        },
      ],
    },
  },
})
