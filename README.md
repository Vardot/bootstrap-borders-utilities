# Bootstrap Borders Utilities

```
npm add bootstrap-borders-utilities
```

or 
```
yarn add bootstrap-borders-utilities
```

Import the library in a **custom bootstrap 4/5** theme base file
`bootstrap.base.scss`
or `custom_theme.base.scss`
```
// Custom theme base, with Bootstrap overrides.
// -----------------------------------------------------------------------------
@import "../../node_modules/bootstrap/scss/functions";  // Bootstrap functions.
@import "../../node_modules/bootstrap/scss/mixins";     // Bootstrap mixins.
@import "../../node_modules/bootstrap/scss/variables";  // Bootstrap variables.

@import "../variables";                                 // Custom theme variables.
@import "../mixins";                                    // Custom theme mixins.

@import "../../node_modules/bootstrap/scss/_utilities"; // Bootstrap utilities.
// -----------------------------------------------------------------------------

@import "../../node_modules/bootstrap-borders-utilities/lib/scss/border-color-variants.scss";
```


