'use strict';

var AWS = require('aws-sdk');

exports.handler = function(event, context) {
    var bucket = event.Records[0].s3.bucket.name;
    var prefix = 'assets';
    var object = 'image-sources.json';

    require('./s3-image-sources.js')(bucket, prefix, object, context.done);
};
