const checkFlags = require('./src/checkFlags');
const clickOnElement = require('./src/clickOnElement');
const constants = require('./src/constants');
const dataTableFirstRow = require('./src/dataTableFirstRow');
const dataTableRowsHash = require('./src/dataTableRowsHash');
const delay = require('./src/delay');
const eachElementHasCssValue = require('./src/eachElementHasCssValue');
const eachElementHasElement = require('./src/eachElementHasElement');
const elementAttributeIs = require('./src/elementAttributeIs');
const elementAttributeMatchesExpression = require('./src/elementAttributeMatchesExpression');
const elementComputedStyleContains = require('./src/elementComputedStyleContains');
const elementDoeNotHasClass = require('./src/elementDoeNotHasClass');
const elementDoesNotExist = require('./src/elementDoesNotExist');
const elementHasClass = require('./src/elementHasClass');
const elementHasCssValue = require('./src/elementHasCssValue');
const elementInlineStyleIs = require('./src/elementInlineStyleIs');
const elementInlineStyleMatchesExpression = require('./src/elementInlineStyleMatchesExpression');
const elementIsLocated = require('./src/elementIsLocated');
const elementIsNotVisible = require('./src/elementIsNotVisible');
const elementIsVisible = require('./src/elementIsVisible');
const elementsCountIs = require('./src/elementsCountIs');
const elementsCountMatchesExpression = require('./src/elementsCountMatchesExpression');
const elementTextIs = require('./src/elementTextIs');
const elementTextIsNotEmpty = require('./src/elementTextIsNotEmpty');
const elementTextMatchesExpression = require('./src/elementTextMatchesExpression');
const getElementInlineStyles = require('./src/getElementInlineStyles');
const getElementsTextAsArray = require('./src/getElementsTextAsArray');
const getElementStyles = require('./src/getElementStyles');
const getNumericValue = require('./src/getNumericValue');
const goToUrl = require('./src/goToUrl');
const isImageLoaded = require('./src/isImageLoaded');
const pageTitleIs = require('./src/pageTitleIs');
const range = require('./src/range');
const scrolledToElement = require('./src/scrolledToElement');
const scrollToElement = require('./src/scrollToElement');
const textIsInElementChildren = require('./src/textIsInElementChildren');
const typeInElement = require('./src/typeInElement');
const waitUntilElementIsNotLocated = require('./src/waitUntilElementIsNotLocated');
const waitUntilElementIsNotVisible = require('./src/waitUntilElementIsNotVisible');
const waitUntilElementIsVisible = require('./src/waitUntilElementIsVisible');
const waitUntilElementsAreVisible = require('./src/waitUntilElementsAreVisible');
const waitUntilElementVisible = require('./src/waitUntilElementVisible');
const webElementAttributeIncludes = require('./src/webElementAttributeIncludes');
const webElementAttributeIs = require('./src/webElementAttributeIs');
const webElementInlineStyleIs = require('./src/webElementInlineStyleIs');
const webElementIsImageLoaded = require('./src/webElementIsImageLoaded');
const webElementTextIs = require('./src/webElementTextIs');
const webElementTextIsInChildren = require('./src/webElementTextIsInChildren');
const webElementTextIsNotEmpty = require('./src/webElementTextIsNotEmpty');


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