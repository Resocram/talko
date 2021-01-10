const express = require('express');
const multer = require('multer')
const cors = require('cors');
const uploadFile = require('./gcloud');
const app = express();

app.use(cors())


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
  console.log(req.body);
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) return res.status(500).json(err)
    else if (err) return res.status(500).json(err)
    // uploadFile(req.body);
    return res.status(200).send(req.file)
  })

});

app.listen(8000, function() {
  console.log('App running on port 8000');
});