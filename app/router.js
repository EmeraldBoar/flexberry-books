import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('404', { path: '*path' });

  this.route('speakers', function() {
    this.route('edit', { path: ':id/edit'});
    this.route('create');
  });

  this.route('books', function() {
    this.route('edit', { path: ':id/edit'});
    this.route('create');
  });

  this.route('meetings', function() {
    this.route('edit', { path: ':id/edit'});
    this.route('create');
  });
});

export default Router;
