/**
 * Created by jaymorgan on 8/4/14.
 */

var fs = require('fs');

var Utils = {

  /**
   * @name screenShotDirectory
   * @description The directory where screenshots will be created
   * @type {String}
   */
  screenShotDirectory: 'e2e/results/',

  /**
   * @name writeScreenShot
   * @description Write a screenshot string to file.
   * @param {String} data The base64-encoded string to write to file
   * @param {String} filename The name of the file to create (do not specify directory)
   */
  writeScreenShot: function (data, filename) {
    var stream = fs.createWriteStream(this.screenShotDirectory + filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

};

/**
 * Automatically store a screenshot for each test.
 */
afterEach(function () {
  var currentSpec = jasmine.getEnv().currentSpec,
    passed = currentSpec.results().passed();

  browser.takeScreenshot().then(function (png) {
    browser.getCapabilities().then(function (capabilities) {
      var browserName = capabilities.caps_.browserName,
        passFail = (passed) ? 'pass' : 'FAIL',
        filename = browserName + ' ' + passFail + ' - ' + currentSpec.description + '.png';

      Utils.writeScreenShot(png, filename);
    });
  });
});