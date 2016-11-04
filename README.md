duplicate-files
===========

[![Build Status](https://travis-ci.org/joliveros/duplicate-files.svg?branch=master)](https://travis-ci.org/joliveros/duplicate-files)
[![npm version](https://badge.fury.io/js/duplicate-files.svg)](http://badge.fury.io/js/duplicate-files)

Duplicate files easily.


Install
-------

```shell
npm install -g duplicate-files
```

Run
-------

```shell
duplicate-files ./some-directory --find-pattern 'spec\.js$' --replace-pattern 'spec\.js$' --string test.js
```

A dry run before you break things
-------
```shell
DEBUG=duplicate-files* duplicate-files ./some-directory --dry-run --find-pattern 'spec\.js$' --replace-pattern 'spec\.js$' --string test.js
```

License
-------

[MIT](https://github.com/joliveros/duplicate-files/blob/master/LICENSE) (c) [joliveros](https://github.com/joliveros)
