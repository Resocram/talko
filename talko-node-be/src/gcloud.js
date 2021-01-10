// Imports the Google Cloud client library
const path = require('path');
const { Storage } = require('@google-cloud/storage');

const bucketName = 'talko';

// Creates a client
const storage = new Storage({
  keyFilename: path.join(__dirname, '../gcp-credentials.json'),
  projectId: 'talko-301223'
});

async function uploadFile(audio) {
  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(path.basename('./a.wav'), {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'public, max-age=31536000',
    },
  }).then(response => {
    console.log(response);
  });

  console.log(`${'./a.wav'} uploaded to ${bucketName}.`);
}

uploadFile().catch(console.error);

module.exports = uploadFile;