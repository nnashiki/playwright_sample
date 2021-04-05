# playwright_sample

playwright のサンプル を作ってみました。
3つのブラウザで自動テストを実行し、動画を作成します。

!()[./sample.gif]

# テスト内容
- テスト対象のテキストボックスに入力
- ボタンを押す

# 環境セットアップ (テスト実行環境)
`npm install`

# 環境セットアップ (テスト対象)
`docker run --rm --name sample -p 8090:80 -v $PWD/src/app:/usr/share/nginx/html -d nginx`

# test の実行

`npm test`

# format

`make format`
