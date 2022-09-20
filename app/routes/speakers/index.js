import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: true
  },

  model({ search }) {
    // return search ? this.get('dataService').getSpeakers(search) : this.get('dataService').getSpeakers();
    return this.get('store').findAll('speaker');
  }
});
