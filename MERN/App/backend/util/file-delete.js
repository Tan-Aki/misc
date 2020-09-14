const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    secretKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const fileDelete = (imagePath) => {
    const filename = imagePath.split('/').pop()
    const params = { Bucket: process.env.AWS_BUCKET_NAME, Key: filename };
    s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack);
        // error
        else console.log('deleted'); // deleted
    });
};

module.exports = fileDelete;
