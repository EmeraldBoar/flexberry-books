import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(evt) {
      evt.preventDefault();
      const uploadData = this.get('uploadData');
      const bookModel = this.get('model');
      bookModel.setProperties({
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        tags: this.get('tags'),
        description: this.get('description'),
        rating: this.get('rating'),
        coverURL: this.get("coverUrl")
      });

      await bookModel.save();
      const book = await bookModel.save();

      if (uploadData) {
        await this.get("dataService").createBookCover(Number(book.id), uploadData);
      }
      this.transitionToRoute('books');
    },

    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
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
