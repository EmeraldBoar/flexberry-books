import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
  setupController(controller) {
    this._super(...arguments);

    controller.setProperties({
      firstName: '',
      lastName: '',
      patronymic: '',
    })
  }
});
