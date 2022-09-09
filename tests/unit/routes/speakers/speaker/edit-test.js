import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | speakers/speaker/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:speakers/speaker/edit');
    assert.ok(route);
  });
});
