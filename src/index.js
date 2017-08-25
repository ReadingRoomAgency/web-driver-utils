const checkFlags = require('./checkFlags');
const clickOnElement = require('./clickOnElement');
const constants = require('./constants');
const dataTableFirstRow = require('./dataTableFirstRow');
const dataTableRowsHash = require('./dataTableRowsHash');
const delay = require('./delay');
const eachElementHasCssValue = require('./eachElementHasCssValue');
const eachElementHasElement = require('./eachElementHasElement');
const elementAttributeIs = require('./elementAttributeIs');
const elementAttributeMatchesExpression = require('./elementAttributeMatchesExpression');
const elementComputedStyleContains = require('./elementComputedStyleContains');
const elementDoeNotHasClass = require('./elementDoeNotHasClass');
const elementDoesNotExist = require('./elementDoesNotExist');
const elementHasClass = require('./elementHasClass');
const elementHasCssValue = require('./elementHasCssValue');
const elementInlineStyleIs = require('./elementInlineStyleIs');
const elementInlineStyleMatchesExpression = require('./elementInlineStyleMatchesExpression');
const elementIsLocated = require('./elementIsLocated');
const elementIsNotVisible = require('./elementIsNotVisible');
const elementIsVisible = require('./elementIsVisible');
const elementsCountIs = require('./elementsCountIs');
const elementsCountMatchesExpression = require('./elementsCountMatchesExpression');
const elementTextIs = require('./elementTextIs');
const elementTextIsNotEmpty = require('./elementTextIsNotEmpty');
const elementTextMatchesExpression = require('./elementTextMatchesExpression');
const getElementInlineStyles = require('./getElementInlineStyles');
const getElementsTextAsArray = require('./getElementsTextAsArray');
const getElementStyles = require('./getElementStyles');
const getNumericValue = require('./getNumericValue');
const goToUrl = require('./goToUrl');
const isImageLoaded = require('./isImageLoaded');
const pageTitleIs = require('./pageTitleIs');
const range = require('./range');
const scrolledToElement = require('./scrolledToElement');
const scrollToElement = require('./scrollToElement');
const textIsInElementChildren = require('./textIsInElementChildren');
const typeInElement = require('./typeInElement');
const waitUntilElementIsNotLocated = require('./waitUntilElementIsNotLocated');
const waitUntilElementIsNotVisible = require('./waitUntilElementIsNotVisible');
const waitUntilElementIsVisible = require('./waitUntilElementIsVisible');
const waitUntilElementsAreVisible = require('./waitUntilElementsAreVisible');
const waitUntilElementVisible = require('./waitUntilElementVisible');
const webElementAttributeIncludes = require('./webElementAttributeIncludes');
const webElementAttributeIs = require('./webElementAttributeIs');
const webElementInlineStyleIs = require('./webElementInlineStyleIs');
const webElementIsImageLoaded = require('./webElementIsImageLoaded');
const webElementTextIs = require('./webElementTextIs');
const webElementTextIsInChildren = require('./webElementTextIsInChildren');
const webElementTextIsNotEmpty = require('./webElementTextIsNotEmpty');


module.exports = {
  checkFlags: checkFlags,
  clickOnElement: clickOnElement,
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
  getElementInlineStyles: getElementInlineStyles,
  getElementsTextAsArray: getElementsTextAsArray,
  getElementStyles: getElementStyles,
  getNumericValue: getNumericValue,
  goToUrl: goToUrl,
  isImageLoaded: isImageLoaded,
  pageTitleIs: pageTitleIs,
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
  webElementTextIsNotEmpty: webElementTextIsNotEmpty,
}