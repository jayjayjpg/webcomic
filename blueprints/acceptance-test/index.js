// blueprints/acceptance-test/index.js
'use strict';

const fs = require('fs');
const path = require('path');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'Generates an acceptance test for a feature.',

  locals: function (options) {
    let destroyAppExists = fs.existsSync(
      path.join(this.project.root, '/tests/helpers/destroy-app.js')
    );

    let friendlyTestName = [
      'Acceptance',
      stringUtils.dasherize(options.entity.name).replace(/[-]/g, ' '),
    ].join(' | ');

    return {
      testFolderRoot: 'tests/acceptance/',
      friendlyTestName,
      destroyAppExists,
    };
  },
};
