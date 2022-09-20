import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('speakers/speaker');
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties({
      firstName: model.firstName,
      lastName: model.lastName,
      patronymic: model.patronymic,
    })
  }
});
