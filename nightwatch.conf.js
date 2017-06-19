var seleniumServer = require('selenium-server');
var phantomjs = require('phantomjs-prebuilt');
var chromedriver = require('chromedriver');

// require('nightwatch-cucumber')()

module.exports = {
  src_folders: ["test"],
  output_folder: "reports",
  custom_commands_path: 'dn-api/commands',
  custom_assertions_path: 'dn-api/assertions',
  page_objects_path: 'page-objects/youtube',
  globals_path: "globals/globalsModule.js",
  live_output: false,
  disable_colors: false,

  // test_runner: "mocha",

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: 'https://www.youtube.com/',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
