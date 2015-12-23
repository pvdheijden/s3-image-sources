'use strict';

var debug = require('debug')('image-sources');
var AWS = require('aws-sdk');

module.exports = function(bucket, prefix, object, callback) {

    var s3 = new AWS.S3();

    s3.listObjects({
        Bucket: bucket,
        Prefix: prefix,
        EncodingType: 'url'
    }, function(err, objects) {
        if (err) {
            console.error(err);
            return callback(err);
        }

        debug('%s/%s bucket folder objects: %j', bucket, prefix, objects);

        var imageSources = objects.Contents.map(function(object) {
            return object.Key;
        });

        debug('%s object: %j', object, imageSources);

        s3.putObject({
            Bucket: bucket,
            Key: object,
            ACL: 'bucket-owner-full-control',
            ContentType: 'application/json',
            ContentEncoding: 'utf8',
            Body: JSON.stringify(imageSources)
        }, function(err) {
            if (err) {
                console.error(err);
                return callback(err);
            }

            callback(err);
        });
    });

};
