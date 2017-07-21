# zunda-cafe
zunda-cafeのissue/wiki用リポジトリ

## sphinxによるガイドライン執筆環境整備

* source/
  * Sphinx記載先ソースファイル
* Makefile, make.bat
  * Sphinxドキュメント生成用スクリプト
* docs/
  * SphinxをビルドしたHTMLを公開用に配置するディレクトリ
  * 暫定で手でビルドしたHTMLを配置

## Gulp(タスクランナーを用いた簡易確認)
* `gulp` コマンドでwatch、Webサーバ起動
* source配下のrstファイルに変更があると`make html` が実行される
* 最初に起動された`localhost:4000`のページはLiveReloadされ、結果の確認が可能

### gulpの使用準備
* `npm -v` コマンドが通ることを確認
* `npm install gulp -g` でgulpコマンドが使用できるようになる
* zunda-cafe をcloneしたフォルダで`npm install` とすると、package.jsonに従い必要なライブラリがnode_modulesに入る。

## 将来的な運用イメージ
1. `develop`ブランチへドキュメント変更のPullRequestを送る
2. 逐次masterへマージ
3. マージされたらTravisCIでSphinxをビルド
4. 生成したbuild/htmlを/docsへPush
