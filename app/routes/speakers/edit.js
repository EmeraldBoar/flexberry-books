import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
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
