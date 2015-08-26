Package.describe({
  name: 'djedi:sanitize-html-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'sanitize-html':'1.9.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('cosmos:browserify', 'client');
  api.addFiles('sanitize-html.browserify.js', 'client');
  api.addFiles('sanitize-html-meteor.js', 'server');

  api.export('sanitizeHtml');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:sanitize-html-meteor');
  api.addFiles('sanitize-html-meteor-tests.js');
});
