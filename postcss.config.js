/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
// prettier-ignore
module.exports = {
  ident: "postcss",
  syntax: "postcss-scss",
  map: true,
  plugins: {
    "postcss-import": {},
    // "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      "autoprefixer": {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    "postcss-nesting": {},
    "autoprefixer": {},
  },
};
