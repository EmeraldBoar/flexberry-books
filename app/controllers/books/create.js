import Controller from '@ember/controller';
import { get, set } from '@ember/object';
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
      await this.get('dataService').createBook({
        rating: '0',
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        descrtiption: this.get('descrtiption'),
        tags: this.get('tags'),
      }, uploadData)
      this.transitionToRoute('books');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }

  }
});
