/* eslint-disable @typescript-eslint/no-unused-vars */
const SEVERITY_ERROR = 2

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports'
  ],
  extends: [
    'standard',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@dword-design/import-alias/recommended'
  ],
  rules: {
    'max-len': [
      SEVERITY_ERROR,
      {
        code: 120
      }
    ]
  }
}
