const IS_IMAGE_LOADED = `return arguments[0].complete &&
      typeof arguments[0].naturalWidth != "undefined" &&
      arguments[0].naturalWidth > 0`;

const INNER_TEXT = 'return arguments[0].innerText';

const PARENT_NODE = 'return arguments[0].parentNode';

const NEXT_SIBLING = 'return arguments[0].nextElementSibling';

const SCROLL_INTO_VIEW = 'return arguments[0].scrollIntoView()';

const EMAIL_ADDRESS = 'test@test.com';

const CLICK_BUTTON = 'arguments[0].click();';

const GET_COMPUTED_STYLE = 'return getComputedStyle(arguments[0]).getPropertyValue(arguments[1])';

// const HOUR_WIDTH = 260;
module.exports = {
  IS_IMAGE_LOADED,
  INNER_TEXT,
  PARENT_NODE,
  NEXT_SIBLING,
  SCROLL_INTO_VIEW,
  EMAIL_ADDRESS,
  GET_COMPUTED_STYLE,
  CLICK_BUTTON,
};
