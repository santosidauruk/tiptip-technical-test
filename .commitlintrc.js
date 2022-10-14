module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // TODO: Add your scope enum here
    'scope-enum': [2, 'always', ['layout', 'component']],
    'type-enum': [
      2,
      'always',
      [
        'conf',
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'revert',
      ],
    ],
  },
};
