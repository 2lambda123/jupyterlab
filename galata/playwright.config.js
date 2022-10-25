// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var baseConfig = require('@jupyterlab/galata/lib/playwright-config');

module.exports = {
  ...baseConfig,
  projects: [
    {
      name: 'galata',
      testMatch: 'test/galata/**',
      testIgnore: '**/.ipynb_checkpoints/**'
    },
    {
      name: 'jupyterlab',
      testMatch: 'test/jupyterlab/**',
      testIgnore: '**/.ipynb_checkpoints/**'
    }
  ],
  // Switch to 'always' to keep raw assets for all tests
  preserveOutput: 'failures-only', // Breaks HTML report if use.video == 'on'
  // Try one retry as some tests are flaky
  retries: 1
};
