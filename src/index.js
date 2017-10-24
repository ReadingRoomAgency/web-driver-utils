'use strict';

var checkFlags = require('./checkFlags');
var clickOnElement = require('./clickOnElement');
var clickOnParentElement = require('./clickOnParentElement');
var clearElementText = require('./clearElementText');
var constants = require('./constants');
var dataTableFirstRow = require('./dataTableFirstRow');
var dataTableRowsHash = require('./dataTableRowsHash');
var delay = require('./delay');
var eachElementHasCssValue = require('./eachElementHasCssValue');
var eachElementHasElement = require('./eachElementHasElement');
var elementAttributeIs = require('./elementAttributeIs');
var elementAttributeMatchesExpression = require('./elementAttributeMatchesExpression');
var elementComputedStyleContains = require('./elementComputedStyleContains');
var elementDoeNotHasClass = require('./elementDoeNotHasClass');
var elementDoesNotExist = require('./elementDoesNotExist');
var elementHasClass = require('./elementHasClass');
var elementHasCssValue = require('./elementHasCssValue');
var elementInlineStyleIs = require('./elementInlineStyleIs');
var elementInlineStyleMatchesExpression = require('./elementInlineStyleMatchesExpression');
var elementIsLocated = require('./elementIsLocated');
var elementIsNotVisible = require('./elementIsNotVisible');
var elementIsVisible = require('./elementIsVisible');
var elementsCountIs = require('./elementsCountIs');
var elementsCountMatchesExpression = require('./elementsCountMatchesExpression');
var elementTextIs = require('./elementTextIs');
var elementTextIsNotEmpty = require('./elementTextIsNotEmpty');
var focusOutOfElement = require('./focusOutOfElement');
var elementTextMatchesExpression = require('./elementTextMatchesExpression');
var getElementInlineStyles = require('./getElementInlineStyles');
var getElementsTextAsArray = require('./getElementsTextAsArray');
var getElementStyles = require('./getElementStyles');
var getNumericValue = require('./getNumericValue');
var goToUrl = require('./goToUrl');
var isImageLoaded = require('./isImageLoaded');
var pageTitleIs = require('./pageTitleIs');
var range = require('./range');
var resizeBrowser = require('./resizeBrowser');
var scrolledToElement = require('./scrolledToElement');
var scrollToElement = require('./scrollToElement');
var textIsInElementChildren = require('./textIsInElementChildren');
var typeInElement = require('./typeInElement');
var waitUntilElementIsNotLocated = require('./waitUntilElementIsNotLocated');
var waitUntilElementIsNotVisible = require('./waitUntilElementIsNotVisible');
var waitUntilElementIsVisible = require('./waitUntilElementIsVisible');
var waitUntilElementsAreVisible = require('./waitUntilElementsAreVisible');
var waitUntilElementVisible = require('./waitUntilElementVisible');
var webElementAttributeIncludes = require('./webElementAttributeIncludes');
var webElementAttributeIs = require('./webElementAttributeIs');
var webElementInlineStyleIs = require('./webElementInlineStyleIs');
var webElementIsImageLoaded = require('./webElementIsImageLoaded');
var webElementTextIs = require('./webElementTextIs');
var webElementTextIsInChildren = require('./webElementTextIsInChildren');
var webElementTextIsNotEmpty = require('./webElementTextIsNotEmpty');

module.exports = {
  checkFlags: checkFlags,
  clickOnElement: clickOnElement,
  clearElementText: clearElementText,
  clickOnParentElement: clickOnParentElement,
  constants: constants,
  dataTableFirstRow: dataTableFirstRow,
  dataTableRowsHash: dataTableRowsHash,
  delay: delay,
  eachElementHasCssValue: eachElementHasCssValue,
  eachElementHasElement: eachElementHasElement,
  elementAttributeIs: elementAttributeIs,
  elementAttributeMatchesExpression: elementAttributeMatchesExpression,
  elementComputedStyleContains: elementComputedStyleContains,
  elementDoeNotHasClass: elementDoeNotHasClass,
  elementDoesNotExist: elementDoesNotExist,
  elementHasClass: elementHasClass,
  elementHasCssValue: elementHasCssValue,
  elementInlineStyleIs: elementInlineStyleIs,
  elementInlineStyleMatchesExpression: elementInlineStyleMatchesExpression,
  elementIsLocated: elementIsLocated,
  elementIsNotVisible: elementIsNotVisible,
  elementIsVisible: elementIsVisible,
  elementsCountIs: elementsCountIs,
  elementsCountMatchesExpression: elementsCountMatchesExpression,
  elementTextIs: elementTextIs,
  elementTextIsNotEmpty: elementTextIsNotEmpty,
  elementTextMatchesExpression: elementTextMatchesExpression,
  focusOutOfElement: focusOutOfElement,
  getElementInlineStyles: getElementInlineStyles,
  getElementsTextAsArray: getElementsTextAsArray,
  getElementStyles: getElementStyles,
  getNumericValue: getNumericValue,
  goToUrl: goToUrl,
  isImageLoaded: isImageLoaded,
  pageTitleIs: pageTitleIs,
  resizeBrowser: resizeBrowser,
  range: range,
  scrolledToElement: scrolledToElement,
  scrollToElement: scrollToElement,
  textIsInElementChildren: textIsInElementChildren,
  typeInElement: typeInElement,
  waitUntilElementIsNotLocated: waitUntilElementIsNotLocated,
  waitUntilElementIsNotVisible: waitUntilElementIsNotVisible,
  waitUntilElementIsVisible: waitUntilElementIsVisible,
  waitUntilElementsAreVisible: waitUntilElementsAreVisible,
  waitUntilElementVisible: waitUntilElementVisible,
  webElementAttributeIncludes: webElementAttributeIncludes,
  webElementAttributeIs: webElementAttributeIs,
  webElementInlineStyleIs: webElementInlineStyleIs,
  webElementIsImageLoaded: webElementIsImageLoaded,
  webElementTextIs: webElementTextIs,
  webElementTextIsInChildren: webElementTextIsInChildren,
  webElementTextIsNotEmpty: webElementTextIsNotEmpty
};
