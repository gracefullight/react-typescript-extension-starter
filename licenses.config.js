module.exports = {
  isValidLicense: new RegExp(
    '\\b(mit|apache\\b.*2|bsd|0bsd|isc|mpl|unlicense|cc0?\\b.*[1-4].0)\\b',
    'i',
  ),
  ignorePackages: [
    // https://github.com/thlorenz/deep-is/blob/master/LICENSE
    'deep-is',
    // https://github.com/fb55/domutils/blob/master/LICENSE
    'domutils',
  ],
};
