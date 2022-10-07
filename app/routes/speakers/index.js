import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: true
  },

  model({ search }) {
    return search ? this.get('store').query('speaker', { q: search }) : this.get('store').findAll('speaker');
  },

  resetController(controller) {
    controller.reset();
  }
});
