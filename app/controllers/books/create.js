import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },

    async saveBook(evt) {
      evt.preventDefault();

      const uploadData = this.get('uploadData');

      const newBook = this.get('store').createRecord('book', {
        rating: '0',
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        description: this.get('description'),
        tags: this.get('tags'),
        coverURL: this.get("coverUrl")
      });
      const book = await newBook.save();

      if (uploadData) {
        await this.get("dataService").createBookCover(Number(book.id), uploadData);
      }

      this.transitionToRoute('books');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('books');
    }

  }
});
