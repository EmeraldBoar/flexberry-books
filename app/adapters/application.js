import DS from 'ember-data';
import ENV from 'flexberry-books/config/environment';


export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    })
  }
});
