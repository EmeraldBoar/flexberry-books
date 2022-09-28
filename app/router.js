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
    this.route('book', { path: ':id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });

  this.route('meetings', function() {
    this.route('meeting', { path: ':id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });
});

export default Router;
