import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  queryParams: ['search', 'tags'],
  search: '',
  tags: '',

  actions: {
    searchBooks(evt) {
      evt.preventDefault();
      this.get('dataService').getBooks(this.get('search'), this.get('tags'));
    },
    deleteBookItem(book) {
      book.destroyRecord()
    }
  }
});
