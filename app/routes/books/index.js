import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: true,
    tags: true
  },


  model({search, tags}) {
    return (search || tags)
      ? this.get('store').query('book', { q: search, tags_like: tags ? tags : '' })
      : this.get('store').findAll('book');
  },

  resetController(controller) {
    controller.reset();
  }
});
