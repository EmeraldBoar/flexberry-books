import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(evt) {
      evt.preventDefault();
      const speakerModel = this.get('model');
      speakerModel.setProperties({
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        patronymic: this.get('patronymic')
      });

      await speakerModel.save();
      this.transitionToRoute('speakers');
    },

    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('speakers');
    }
  },
});
