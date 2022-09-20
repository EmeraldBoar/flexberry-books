import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  queryParams: ['search'],
  search: '',
  actions: {
    async deleteSpeakerItem(speaker) {
      await speaker.destroyRecord()
    },
    searchSpeaker(evt) {
      evt.preventDefault();
      this.get('dataService').getSpeakers(this.get('search'));
    }
  }
});
