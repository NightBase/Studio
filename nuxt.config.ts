// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://localhost:3001',
        },
    },
});
