// expressの読み込み
const express = require('express');
const app = express();

// 接続ポートの指定
var port = 8080;

// デフォルトのビューを指定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// アクセスされたパスに応じてページを遷移
app.use('/', require("./routes/index"));

// express起動
app.listen(port, function() {
  console.log('Example app listening on port 8080!');
});