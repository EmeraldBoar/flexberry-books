import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      meetings: this.get('store').query('meeting', {
        _embed: 'reports'
      }),
      speakers: this.get('store').findAll('speaker'),
      books: this.get('store').findAll('book')
    });
  }
});