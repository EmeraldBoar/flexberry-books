import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  queryParams: ['search'],
  search: '',
  actions: {
    deleteSpeakerItem(speaker) {
      this.get('dataService').deleteElement('speakers',speaker);
    },
    searchSpeaker(evt) {
      evt.preventDefault();
      this.get('dataService').getSpeakers(this.get('search'));
    }
  }
});
