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
    this.route('edit', { path: ':meeting_id/edit'});
    this.route('create', { path: ':meeting_id/create'});
    this.route('report-create', { path: ':id/reports/create'});
    this.route('report-edit', { path: 'reports/:report_id/edit' });
    this.route('report-meeting-create', { path: ':id/report-meeting/create' });
    this.route('report-meeting-edit', { path: '/report-meeting/:report_id/edit' });
  });
});

export default Router;
