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

### 将来的な運用イメージ
1. `develop`ブランチへドキュメント変更のPullRequestを送る
2. 逐次masterへマージ
3. マージされたらTravisCIでSphinxをビルド
4. 生成したbuild/htmlを/docsへPush