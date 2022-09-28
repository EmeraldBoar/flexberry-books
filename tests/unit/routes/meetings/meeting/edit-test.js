import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | meetings/meeting/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:meetings/meeting/edit');
    assert.ok(route);
  });
});
