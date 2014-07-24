/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.headerEl = element(by.css('.page-header'));
  this.featuresRepeater = element.all(by.repeater('thing in awesomeThings'));
  this.inputfield = element(by.model('newThing'));
  this.thingform = element(by.css('.thing-form'));
  this.formbutton = element(by.buttonText('Add New'));
};

module.exports = new MainPage();

