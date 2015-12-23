'use strict';

var debug = require('debug')('s3-image-sources');

require('../s3-image-sources.js')('tiles-demo', 'images', 'image-sources.json', function(err) {
    if (err) {
        console.error(err);
    }

    debug('done');
});