import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
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
