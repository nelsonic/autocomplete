AutoComplete
============
[![Build Status](https://travis-ci.org/nelsonic/ac.png?branch=master)](https://travis-ci.org/nelsonic/ac) [![Coverage Status](https://coveralls.io/repos/nelsonic/ac/badge.png)](https://coveralls.io/r/nelsonic/ac) [![Code Climate](https://codeclimate.com/github/nelsonic/ac.png)](https://codeclimate.com/github/nelsonic/ac) [![Dependencies](https://david-dm.org/nelsonic/ac.png?theme=shields.io)](https://david-dm.org/nelsonic/ac) [![NPM version](https://badge.fury.io/js/ac.png)](https://npmjs.org/package/ac)

Autocomplete all the words!

The project we are currently working on requires auto-complete
with a large number of possible words.

This is an experiment to create a great auto-complete experience
on a shoe-string.

## Tasks

- [x] Load all the words into LevelDB
- [ ] Search for a complete word in Level
- [ ] investigate code coverage on https://codeclimate.com/repos/53c45db86956800b7b00064d/coverage_setup


## Why LevelDB ?

- Benchmarks: http://leveldb.googlecode.com/svn/trunk/doc/benchmark.html


## Test Coverage
```
npm run-script cover
```
