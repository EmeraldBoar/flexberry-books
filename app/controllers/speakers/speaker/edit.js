import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cancel(evt) {
      evt.preventDefault();
      this.transitionToRoute('speakers');
    }
  }
});
