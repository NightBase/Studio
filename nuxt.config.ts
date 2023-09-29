// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://localhost:3001',
            DB_HOST: process.env.DB_HOST || 'localhost',
            DB_PORT: process.env.DB_PORT || '5432',
            DB_USER: process.env.DB_USER || 'nightbase',
            DB_PASSWORD: process.env.DB_PASSWORD || 'nightbase',
            DB_DATABASE: process.env.DB_DATABASE || 'nightbase',
        },
    },
});
