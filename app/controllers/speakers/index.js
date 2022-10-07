import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  queryParams: ['search'],
  search: '',
  actions: {
    async deleteSpeakerItem(speaker) {
      await speaker.destroyRecord();
      this.get('store').unloadRecord(speaker);
    },
    async searchSpeaker(evt) {
      evt.preventDefault();
      const currentSpeakers = this.get('search')
        ? await this.get('store').query('speaker', { q: this.get('search') })
        : await this.get('store').findAll('speaker');
      this.set('model', currentSpeakers);
    },

  },
  reset() {
    this.set('search', '');
  }
});
