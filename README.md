# ejs-template
## バージョン情報
- Node.js
  - 10.16.0
- express
  - 6.9.0
- ejs
  - 2.6.1

## 利用環境
本環境についてはNode.jsとExpressをインストール済みであることが前提となります。  
インストールしていない場合は、下記項目を参考にインストールをお願い致します。  

### Node.js
Node.jsについては、nvmからインストールするか公式サイトからインストールをお願いいたします。  
nvmからの場合は、[リンク](https://github.com/coreybutler/nvm-windows/releases)より`nvm-setup.zip`をダウンロードし、解凍後エクスプローラーを起動してください。  

起動後、以下コマンドを実行しNode.jsの環境を作成します。
```
# nvm install check
nvm version
# install node.js 10.16.0
nvm install 10.16.0
nvm use 10.16.0
# node.js version check
node -v
```

### express/ejs
expressとejsは以下コマンドを入力しインストールお願いいたします。
```
npm install express ejs --save
```

## アプリ確認方法
一連のコマンド実行後、ブラウザにて`http://localhost:8080`へアクセスします。
```
git clone https://github.com/ptpt-free/ejs-template.git
cd ejs-template
npm init
node app.js
```
ブラウザ上で`Hello world!`と表示されていたら設定完了となります。

