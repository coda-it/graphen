import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: `http://localhost:${process.env.PORT || 3000}`,
    setupNodeEvents(on, config) {},
    specPattern: 'src/**/integration/**/*.spec.js',
    testIsolation: false,
  },
})
