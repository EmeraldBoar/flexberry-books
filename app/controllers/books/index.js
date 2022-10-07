import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  queryParams: ['search', 'tags'],
  search: '',
  tags: '',

  actions: {
    async searchBooks(evt) {
      evt.preventDefault();
      const currentBooks = this.get('search') || this.get('tags')
        ? await this.get('store').query('book', { q: this.get('search'), tags_like: this.get('tags')})
        : await this.get('store').findAll('book');
      this.set('model', currentBooks);
    },
    async deleteBookItem(book) {
      await book.destroyRecord();
      this.get('store').unloadRecord(book);
    }
  },

  reset() {
    this.set('search', '');
    this.set('tags', '');
  }
});
