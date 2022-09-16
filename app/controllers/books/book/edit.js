import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },
    changeUploadData() {

    }
  }
});
