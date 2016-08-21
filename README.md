### Description
eslint config for Fuzzy's Javascript projects.

### Usage

Add the `eslint` and `eslint-config-fuzzy` modules to your devDependencies in your project's package.json file. For example:

```javascript
"devDependencies":
  "eslint": "^2.11.1",
  "eslint-config-fuzzy": "^1.0.0"
}
```

Add a .eslintrc file to the root of your project:

```javascript
{
  "extends": [
    "fuzzy"
  ]
}
```

Add lint scripts to the `scripts` block in your project's package.json:

```javascript
"scripts": {
  "lint": "eslint [YOUR_SOURCE_DIR]",
  "lint-fix": "eslint --fix [YOUR_SOURCE_DIR]"
}
```

Run lint!

```
$ npm run lint
```

or, to auto-fix automatically fixable errors:

```
$ npm run lint-fix
```

### Publishing a new version

#### Prerequisites
* [Create a npm user](https://docs.npmjs.com/getting-started/publishing-npm-packages#creating-a-user)
* Ask Stephen to add you as a contributor to the [npm module](https://www.npmjs.com/package/eslint-config-fuzzy)

#### Publishing to npm
1. Update the version in [package.json](https://github.com/fuzzyinc/eslint-config-fuzzy/blob/master/package.json#L3)
1. `$ npm publish`
1. If you've published a new major revision, inform the rest of the team so they can update their respective dependencies
