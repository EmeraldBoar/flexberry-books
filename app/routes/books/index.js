import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: true,
    tags: true
  },


  model({search, tags}) {
    return this.get('dataService').getBooks(search, tags);
  }
});
