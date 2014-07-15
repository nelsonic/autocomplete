AutoComplete
============
[![Build Status](https://travis-ci.org/nelsonic/ac.png?branch=master)](https://travis-ci.org/nelsonic/ac) [![Coverage Status](https://coveralls.io/repos/nelsonic/ac/badge.png)](https://coveralls.io/r/nelsonic/ac) [![Code Climate](https://codeclimate.com/github/nelsonic/ac.png)](https://codeclimate.com/github/nelsonic/ac) [![Dependencies](https://david-dm.org/nelsonic/ac.png?theme=shields.io)](https://david-dm.org/nelsonic/ac) [![devDependency Status](https://david-dm.org/nelsonic/ac/dev-status.svg)](https://david-dm.org/nelsonic/ac#info=devDependencies) [![NPM version](https://badge.fury.io/js/ac.png)](https://npmjs.org/package/ac)

Autocomplete all the words!

The project we are currently working on requires auto-complete
with a large number of possible words.

This is an experiment to create a great auto-complete experience
on a shoe-string.

## Tasks

- [x] Load all the words into LevelDB
- [x] Search for a complete word in Level
- [x] Search for a partial word
- [ ] When a person clicks on a word in the UI we need to count
that as a "vote" for the word, so we can get some stats.
- [ ] Use Socket.io for faster transport of characters and suggestions.
- [ ] Implement multiple UIs
- [ ] Only start searching for suggestions after the person types second char

Example: search for the first four characters of the word awesome:

Returns the following four words:
```
awesome
awesomely
awesomeness
awest
```
These are the suggestions we would return to the client.
More about that tomorrow ... ;-)




## Why LevelDB ?

- Benchmarks: http://leveldb.googlecode.com/svn/trunk/doc/benchmark.html


#### Got Coverage ?
```
npm run-script cover
```
- [ ] investigate code coverage on https://codeclimate.com/repos/53c45db86956800b7b00064d/coverage_setup
