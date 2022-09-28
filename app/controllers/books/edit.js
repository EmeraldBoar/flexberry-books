import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    async saveBook(evt) {
      evt.preventDefault();
      const bookModel = this.get('model');
      bookModel.setProperties({
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        tags: this.get('tags'),
        description: this.get('description'),
        rating: this.get('rating')
      });

      await bookModel.save();
      this.transitionToRoute('books');
    },

    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },
    changeUploadData() {

    },
    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('books');
    }
  }
});
