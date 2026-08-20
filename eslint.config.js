const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  { ignores: ['android/**', 'forever-affirmed/**', 'coverage/**', '.tts-venv/**', '.model-cache/**', 'output/**'] },
]);
