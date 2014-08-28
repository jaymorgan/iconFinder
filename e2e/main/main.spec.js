'use strict';



describe('Main View', function () {
  var MainPage;

  beforeEach(function () {
    browser.get('/');
    MainPage = require('./main.po');
    var utils = require('../screenshots/utils.spec');
  });

  it('should include a features list and form', function () {
    expect(MainPage.headerEl.getText()).toBe('Features:');
    expect(MainPage.thingform.isPresent()).toBe(true);
  });

  it('should add a new feature', function () {
    MainPage.inputfield.sendKeys('test');
    MainPage.formbutton.click();
    expect(MainPage.featuresRepeater.last().getText()).toContain('test');
  });

  it('should delete the new feature', function () {
    MainPage.featuresRepeater.last().element(by.css('.close')).click();
    expect(MainPage.featuresRepeater.last().getText()).not.toContain('test');
  });

});
