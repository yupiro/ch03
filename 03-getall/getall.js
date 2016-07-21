// リンクを解析してダウンロード for Node.js
// --モジュールの取り込み--
var client = require('cheerio-httpcli');
var request = require('request');
var URL = require('url');
var fa = require('fs');
var path = require('path');

// ---共通の設定---
// 階層の指定
var LINK_LEVEL = 3;
// 基準となるページURL
var TARGET_URL = "http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/";
var list = {};

// メイン処理
downloadRec(TARGET_URL,0);

// 指定のurlを最大levelまでダウンロード
function downloadRec(url, level) {
    // 最大レベルチェック
    if (level >= LINK_LEVEL) return;
    // 既出のサイトは無視する
    if(list[url]) return;
    list[url] = true;
    // 基準ページ以外なら無視する

}