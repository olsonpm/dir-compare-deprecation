'use strict';

const dirCompare = require('dir-compare')
  , path = require('path')
  ;


dirCompare.compare(
    path.join(__dirname, 'parent')
    , path.join(__dirname, 'parent2')
    , { compareContent: true }
  )
  .then(() => console.log('done'))
  .catch(err => { throw err; });
