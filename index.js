'use strict';

var data = module.exports = {
  jquery: {
    versions: ['2.1.3', '2.1.2', '2.1.1', '2.1.0', '2.0.3', '2.0.2', '2.0.1', '2.0.0', '1.11.1', '1.11.0', '1.10.2', '1.10.1', '1.10.0', '1.9.1', '1.9.0', '1.8.3', '1.8.2', '1.8.1', '1.8.0', '1.7.2', '1.7.1', '1.7.0', '1.6.4', '1.6.3', '1.6.2', '1.6.1', '1.6.0', '1.5.2', '1.5.1', '1.5.0', '1.4.4', '1.4.3', '1.4.2', '1.4.1', '1.4.0', '1.3.2', '1.3.1', '1.3.0', '1.2.6', '1.2.3'],
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/jquery/' + version + '/jquery.min.js';
    }
  },
  'jquery-ui': {
    versions: ['1.11.2', '1.11.1', '1.11.0', '1.10.4', '1.10.3', '1.10.2', '1.10.1', '1.10.0', '1.9.2', '1.9.1', '1.9.0', '1.8.24', '1.8.23', '1.8.22', '1.8.21', '1.8.20', '1.8.19', '1.8.18', '1.8.17', '1.8.16', '1.8.15', '1.8.14', '1.8.13', '1.8.12', '1.8.11', '1.8.10', '1.8.9', '1.8.8', '1.8.7', '1.8.6', '1.8.5', '1.8.4', '1.8.2', '1.8.1', '1.8.0', '1.7.3', '1.7.2', '1.7.1', '1.7.0', '1.6.0', '1.5.3', '1.5.2'],
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/jqueryui/' + version + '/jquery-ui.min.js';
    }
  },
  dojo: {
    versions: ['1.10.4', '1.10.3', '1.10.2', '1.10.1', '1.10.0', '1.9.3', '1.9.2', '1.9.1', '1.9.0', '1.8.5', '1.8.4', '1.8.3', '1.8.2', '1.8.1', '1.8.0', '1.7.5', '1.7.4', '1.7.3', '1.7.2', '1.7.1', '1.7.0', '1.6.1', '1.6.0', '1.5.2', '1.5.1', '1.5.0', '1.4.4', '1.4.3', '1.4.1', '1.4.0', '1.3.2', '1.3.1', '1.3.0', '1.2.3', '1.2.0', '1.1.1'],
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/dojo/' + version + '/dojo/dojo.js';
    }
  },
  swfobject: {
    versions: ['2.2', '2.1'],
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/swfobject/' + version + '/swfobject.js';
    }
  },
  'angular-material': {
    versions: ['0.9.4', '0.9.0', '0.8.3', '0.8.2', '0.8.1', '0.8.0', '0.7.1', '0.7.0', '0.6.1'],
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/angular_material/' + version + '/angular-material.min.js';
    },
    css: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/angular_material/' + version + '/angular-material.min.css';
    }
  },
  'angular-facebook': {
    versions: ['0.2.3'],
    js: function (version) {
      return 'https://cdn.rawgit.com/Ciul/angular-facebook/v' + version + '/lib/angular-facebook.js';
    }
  },
  'angular-google-plus': {
    versions: ['0.1.3'],
    js: function (version) {
      return 'https://cdn.rawgit.com/ruiaraujo/angular-google-plus/' + version + '/dist/angular-google-plus.min.js';
    }
  },
  'angular-google-chart': {
    versions: ['0.0.11'],
    js: function (version) {
      return 'https://cdn.rawgit.com/bouil/angular-google-chart/' + version + '/ng-google-chart.js';
    }
  },
  'ng-file-upload': {
    versions: ['3.2.4'],
    js: function (version) {
      return 'https://cdn.rawgit.com/danialfarid/angular-file-upload/' + version + '/dist/angular-file-upload.min.js';
    }
  },
  'ng-ckeditor': {
    versions: ['0.2.1'],
    js: function (version) {
      return 'https://cdn.rawgit.com/esvit/ng-ckeditor/v' + version + '/ng-ckeditor.min.js';
    }
  },
  'angular-underscore-module': {
    versions: ['1.0.1'],
    js: function (version) {
      return 'https://cdn.rawgit.com/andresesfm/angular-underscore-module/v' + version + '/angular-underscore-module.js';
    }
  },
  'angular-ui-router': {
    versions: ['0.2.13'],
    js: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/' + version + '/angular-ui-router.min.js';
    }
  },
  'lodash': {
    versions: ['3.5.0'],
    js: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/' + version + '/lodash.min.js';
    }
  },
  'angular-translate': {
    versions: ['2.6.1'],
    js: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/bower-angular-translate/' + version + '/angular-translate.min.js';
    }
  },
  'angular-translate-loader-static-files': {
    versions: ['2.6.1'],
    js: function (version) {
      return 'https://cdn.rawgit.com/angular-translate/bower-angular-translate-loader-static-files/' + version + '/angular-translate-loader-static-files.min.js';
    }
  },
  'angular-translate-storage-cookie': {
    versions: ['2.6.1'],
    js: function (version) {
      return 'https://cdn.rawgit.com/angular-translate/bower-angular-translate-storage-cookie/' + version + '/angular-translate-storage-cookie.min.js';
    }
  },
  'angular-translate-storage-local': {
    versions: ['2.6.1'],
    js: function (version) {
      return 'https://cdn.rawgit.com/angular-translate/bower-angular-translate-storage-local/' + version + '/angular-translate-storage-local.min.js';
    }
  },
  'ckeditor': {
    versions: ['4.4.5'],
    js: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/ckeditor/' + version + '/ckeditor.js';
    }
  },
  'js-data': {
    versions: ['1.5.13'],
    js: function (version) {
      return 'https://cdn.rawgit.com/js-data/js-data/' + version + '/dist/js-data.min.js';
    }
  },
  'js-data-angular': {
    versions: ['2.2.3'],
    js: function (version) {
      return 'https://cdn.rawgit.com/js-data/js-data-angular/' + version + '/dist/js-data-angular.min.js';
    }
  },
  'angular-local-storage': {
    versions: ['0.1.5'],
    js: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/' + version + '/angular-local-storage.min.js';
    }
  },
  'animate.css': {
    versions: ['3.2.4'],
    css: function (version) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/' + version + '/animate.min.css';
    }
  },
  'angular-jwt': {
    versions: ['0.0.6'],
    js: function (version) {
      return 'https://cdn.rawgit.com/auth0/angular-jwt/v' + version + '/dist/angular-jwt.min.js';
    }
  }
};

// AngularJS

var angularFiles = [
  'angular',
  'angular-animate',
  'angular-aria',
  'angular-cookies',
  'angular-loader',
  'angular-messages',
  'angular-resource',
  'angular-route',
  'angular-sanitize',
  'angular-touch'
];

angularFiles.forEach(function (item) {
  var stableVersions = ['1.4.0', '1.3.15', '1.3.14', '1.3.13', '1.3.12', '1.3.11', '1.3.10', '1.3.9', '1.3.8', '1.3.7', '1.3.6', '1.3.5', '1.3.4', '1.3.3', '1.3.2', '1.3.1', '1.3.0', '1.2.28', '1.2.27', '1.2.26', '1.2.25', '1.2.24', '1.2.23', '1.2.22', '1.2.21', '1.2.20', '1.2.19', '1.2.18', '1.2.17', '1.2.16', '1.2.15', '1.2.14', '1.2.13', '1.2.12', '1.2.11', '1.2.10', '1.2.9', '1.2.8', '1.2.7', '1.2.6', '1.2.5', '1.2.4', '1.2.3', '1.2.2', '1.2.1', '1.2.0', '1.0.8', '1.0.7', '1.0.6', '1.0.5', '1.0.4', '1.0.3', '1.0.2', '1.0.1'];
  var unstableVersions = ['1.4.0-beta.6', '1.4.0-beta.5', '1.4.0-beta.4', '1.4.0-beta.3', '1.4.0-beta.2', '1.4.0-beta.1', '1.4.0-beta.0', '1.3.0-rc.5', '1.3.0-rc.4', '1.3.0-rc.3', '1.3.0-rc.2', '1.3.0-rc.1', '1.3.0-rc.0', '1.3.0-beta.19', '1.3.0-beta.18', '1.3.0-beta.17', '1.3.0-beta.16', '1.3.0-beta.15', '1.3.0-beta.14', '1.3.0-beta.13', '1.3.0-beta.12', '1.3.0-beta.11', '1.3.0-beta.10', '1.3.0-beta.9', '1.3.0-beta.8', '1.3.0-beta.7', '1.3.0-beta.6', '1.3.0-beta.5', '1.3.0-beta.4', '1.3.0-beta.3', '1.3.0-beta.2', '1.3.0-beta.1'];
  data[item] = {
    versions: [].concat(stableVersions).concat(unstableVersions),
    js: function (version) {
      return 'https://ajax.googleapis.com/ajax/libs/angularjs/' + version + '/' + item + '.min.js';
    }
  };
});
