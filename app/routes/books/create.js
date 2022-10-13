import Route from '@ember/routing/route';
import { set } from '@ember/object';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";


export default Route.extend(ApplicationRouteMixin, {
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'tags', []);
    set(controller, 'title', '');
    set(controller, 'author', '');
    set(controller, 'pages', '');
    set(controller, 'description', '');
    set(controller, 'uploadData', null);
  }
});
