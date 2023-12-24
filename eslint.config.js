import antfu from "@antfu/eslint-config"

export default antfu({
  stylistic: {
    indent: 2,
    quotes: "double",
  },
  typescript: true,
  vue: true,
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  ignores: [
    "./fixtures",
  ],
}, {
  rules: {
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/parameter-properties": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/triple-slash-reference": "off",

    "prefer-const": "off",
    "vue/no-sparse-arrays": "warn",
    "vue/object-curly-newline": ["warn", { multiline: true, consistent: true }],
    "vue/object-curly-spacing": ["warn", "always"],
    "vue/object-property-newline": ["warn", { allowMultiplePropertiesPerLine: true }],
    "vue/object-shorthand": [
      "warn",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "vue/operator-linebreak": ["warn", "before"],
    "vue/prefer-template": "warn",
    "vue/quote-props": ["warn", "consistent-as-needed"],
    "vue/space-in-parens": ["warn", "never"],
    "vue/space-infix-ops": "warn",
    "vue/space-unary-ops": ["warn", { words: true, nonwords: false }],
    "vue/template-curly-spacing": "warn",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",

  },
})
