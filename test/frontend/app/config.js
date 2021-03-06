'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return /\.spec\.js$/.test(file);
});

require.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts/app',

  paths: {
    json3: '../../components/json3/lib/json3',
    jquery: '../../components/jquery/jquery',
    // needed for precompiled templates
    handlebars: '../../components/handlebars/handlebars.runtime',
    JST: 'templates',
    underscore: '../../components/lodash/lodash',
    backbone: '../../components/backbone/backbone',

    chai: '../../components/chai/chai',
    'sinon-chai': '../../components/sinon-chai/lib/sinon-chai',

    has: '../../components/has/has',
  },
  shim: {
    handlebars: {
      deps: [],
      exports: 'Handlebars',
    },
    underscore: {
      deps: [],
      exports: '_',
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone',
    },
  },
});

require(['chai', 'sinon-chai', 'has'], function (chai, sinonChai, has) {
  window.chai = chai;
  chai.use(sinonChai);

  window.assert = chai.assert;
  window.should = chai.should();
  window.expect = chai.expect;

  window.has = has;

  require(tests, function () {
    window.__karma__.start();
  });
});
