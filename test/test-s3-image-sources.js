'use strict';

var debug = require('debug')('s3-image-sources');

require('../s3-image-sources.js')('tiles-demo', 'assets', 'image-sources.json', function(err) {
    debug('done');
});