module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/**/*.js',
      'spec/**/*-spec.js'
    ],
    exclude: [],
    reporters: ['spec', 'junit', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    singleRun: true,

    preprocessors: {
      'src/**/*.js': 'coverage'
    },

    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/'},
        {type: 'text-summary'},
        {type: 'text'},
        {type: 'cobertura'}
      ]
    }

  });
};
