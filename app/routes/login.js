import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';


export default Route.extend(UnauthenticatedRouteMixin, {
  setupController(controller) {
    controller.setProperties({
      email: '',
      password: '',
      errors: '',
      previousRouteURL: this.router.currentURL ? this.router.currentURL : 'index',
      remember: false
    })
  }
});
