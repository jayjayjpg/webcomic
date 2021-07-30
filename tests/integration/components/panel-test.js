import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | panel', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    let plainPanel = this.server.create('panel');
    let store = this.owner.lookup('service:store');
    let panel = await store.findRecord('panel', plainPanel.id, { include: 'illustrations' });
    this.set('panel', panel);
  });

  test('it renders', async function(assert) {
    await render(hbs`<Panel @panel={{this.panel}} />`);

    assert.dom('[data-test-panel]').exists({ count: 1 });
    assert.dom('[data-test-panel-layer]').exists({ count: 1 });
  });
});
