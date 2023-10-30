module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/display-name": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  // overrides: [
  //   {
  //     files: ["**/ui/locales/**/*.{ts,js}"],
  //     rules: {
  //       "import/no-anonymous-default-export": 0,
  //     },
  //   },
  // ],
};
