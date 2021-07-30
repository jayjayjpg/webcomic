import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';


module('<%= friendlyTestName %> ✨✨✨', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    // this.server.createList(...);
  });

  test('visiting /<%= dasherizedModuleName %>', async function(assert) {
    await visit('/<%= dasherizedModuleName %>');

    assert.equal(currentURL(), '/<%= dasherizedModuleName %>');
  });
});
