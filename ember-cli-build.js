'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': false
    }
  });

  app.import('vendor/tagsinput.css');
  app.import('vendor/bootstrap-select.min.css');
  app.import('vendor/bootstrap-datepicker.css');


  const jsFiles = funnel('vendor', {
    include: ['**/*.js'],
    destDir: 'js'
  });

  const bootstrapFiles = funnel('node_modules/bootstrap/dist/js', {
    include: ['bootstrap.bundle.min.js'],
    destDir: 'js'
  });

  const jqueryFiles = funnel('node_modules/blueimp-file-upload/js', {
    include: ['**/*.js'],
    destDir: 'js'
  });



  return app.toTree([jsFiles, bootstrapFiles, jqueryFiles]);
};
