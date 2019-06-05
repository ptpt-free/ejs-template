// expressの読み込み
const express = require('express');
const router = express.Router();

// http://localhost:8080がGetされた際に実行
router.get('/', function(req, res, next) {
    console.log('[INFO]call index page');
    // views/index.ejsを表示(.ejsは省略)
    res.render('index');
});

// モジュールのexport
module.exports = router;