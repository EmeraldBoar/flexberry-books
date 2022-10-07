import Route from '@ember/routing/route';

export default Route.extend({
  model({ meeting_id }) {
    return this.get('store').findRecord('meeting', meeting_id);
  }
});
