# user-settings.json

{
// Enables Prettier to format on save
"editor.formatOnSave": true,
// Disables Prettier to format on save on JS files
"[javascript]": {
"editor.formatOnSave": false
},
// Explicitly disables Prettier for JS
"prettier.disableLanguages": [
"js"
],
// Enables ESlint to format on save
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true
}

// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false,
// Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
"prettier.eslintIntegration": true
