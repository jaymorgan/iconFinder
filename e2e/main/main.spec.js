'use strict';

describe('Main View', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include a features list and form', function () {
    expect(page.headerEl.getText()).toBe('Features:');
    expect(page.thingform.isPresent()).toBe(true);
  });

  it('should add a new feature', function () {
    page.inputfield.setText('test');
    page.formbutton.click();
    expect(page.featuresRepeater.last().getText()).toBe('test');
  });

  it('should delete the new feature', function () {
    page.featuresRepeater.last().element(by.css('close')).click();
    expect(page.featuresRepeater.last().getText()).not.toBe('test');
  });

});

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