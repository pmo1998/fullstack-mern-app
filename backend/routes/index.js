const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Data = mongoose.model('Data');


router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.send({ success: false, error: err });
    return res.send({ success: true, data: data });
  });
});


module.exports = router;
