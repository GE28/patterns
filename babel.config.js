'use strict';

function getTsConfigPaths() {
  const config = require('./tsconfig.json');
  const options = config.compilerOptions || { paths: {} };
  const { paths } = options;

  const baseUrl =
    './' + options.baseUrl.replace(/^\.\//, '').replace(/\/$/, '') + '.';
  const moduleResolverOptions = {};

  Object.keys(paths).forEach((key) => {
    paths[key].forEach((_key, i) => {
      const moduleResolverKey = key.replace(/^/, '^').replace(/\*/, '(.*)');
      const moduleResolverValue = paths[key][i]
        .replace(/(\.\/)/, baseUrl)
        .replace(/(\/\*)/, '/\\1');
      moduleResolverOptions[moduleResolverKey] = moduleResolverValue;
    });
  });

  const absolutePathsRegex = {
    '^[^@/.]((?!/).*)': baseUrl + '\\0'
  };

  return Object.assign(moduleResolverOptions, baseUrl && absolutePathsRegex);
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: '16' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    [
      'module-resolver',
      {
        alias: getTsConfigPaths(),
        extensions: ['.js', '.json']
      }
    ]
  ],
  ignore: ['./src/__tests__/**/*.spec.ts']
};
