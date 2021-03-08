/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export default ({ loadTestFile }) => {
  describe('upgrade', function () {
    loadTestFile(require.resolve('./dashboard_smoke_tests'));
  });
};
