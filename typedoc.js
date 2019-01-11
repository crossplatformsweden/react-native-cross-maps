module.exports = {
  out: './docs/dist/api/',
  name: 'Crossplatform React-Native Core',
  mode: 'modules',
  module: 'commonjs',
  target: 'ES6',
  hideGenerator: true,
  readme: 'none',
  excludeExternals: true,
  includes: './',
  exclude: [
    '**/__tests__/**/*',
    '**/__test_utils__/**/*',
    '**/__mocks__/**/*',
    '**/*.test.*',
    '**/index.ts',
  ],
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
};
