import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  dataService: service('data'),

  actions: {
    async saveSpeaker(evt) {
      evt.preventDefault();
      const newSpeaker = this.get('store').createRecord('speaker', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        patronymic: this.get('patronymic')
      });
      await newSpeaker.save();
      this.transitionToRoute('speakers');
    },
    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('speakers');
    }
  }
});
