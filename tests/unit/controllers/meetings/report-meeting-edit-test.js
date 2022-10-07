import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | meetings/report-meeting-edit', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:meetings/report-meeting-edit');
    assert.ok(controller);
  });
});
