import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.server.createList('panel', 3);
  });

  test('visiting home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test-home-page-title]').includesText('Diamanias');
    assert.dom('[data-test-panel]').exists({ count: 3 });
    assert.dom('[data-test-panel-layer]').exists({ count: 3 });
  });
});
