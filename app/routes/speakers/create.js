import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.setProperties({
      firstName: '',
      lastName: '',
      patronymic: '',
    })
  }
});
