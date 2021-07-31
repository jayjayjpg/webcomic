import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | panel/layer', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.image = {
      id: 12,
      url: 'https://somerandomimmmage.io/url.jpg',
      alt: 'Random description',
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<Panel::Layer @image={{this.image}} />`);

    assert.dom('[data-test-panel-layer="12"]').exists();
    assert
      .dom('[data-test-panel-layer]')
      .hasAttribute('src', 'https://somerandomimmmage.io/url.jpg');
    assert
      .dom('[data-test-panel-layer]')
      .hasAttribute('alt', 'Random description');
  });
});
