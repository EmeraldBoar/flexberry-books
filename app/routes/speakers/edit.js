import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {
    return this.get('store').findRecord('speaker', id);
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
