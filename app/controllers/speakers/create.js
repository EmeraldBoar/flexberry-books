import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  dataService: service('data'),

  actions: {
    async saveSpeaker(evt) {
      evt.preventDefault();
      await this.get('dataService').createSpeaker({
        firstName: this.get('model.firstName'),
        lastName: this.get('model.lastName'),
        patronymic: this.get('model.patronymic')
      });
      this.transitionToRoute('speakers');
    }
  }
});
