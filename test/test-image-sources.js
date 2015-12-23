'use strict';

var debug = require('debug')('image-sources');

require('../image-sources.js')('tiles-demo', 'assets', 'image-sources.json', function(err) {
    debug('done');
});