# NSNL

## scss コマンドの使用について

### 使用方法

1. ターミナルを開いて `yarn` コマンドを実行し、実行に必要な `node_modules` をダウンロードしてください。（scss コマンドの実行に必要な `node_modules` をダウンロードするためなので、初回のみで OK）
2. `yarn scss` コマンドを実行してください。
3. 作業終了時は `ctrl + c` を入力し、`yarn scss` の実行を停止してください。

### 仕様

`yarn scss` コマンド実行後、scss ファイルの保存時に css/style.css が自動生成されます。style.css は直接触らないように気をつけてください。
（style.css を直接変更した後に style.scss を変更すると、.css ファイルでの変更分が上書きされて先祖返りが起こってしまうため）
`yarn scss` コマンドの動作中は scss の変更によって自動で css ファイルが更新されます。
出力される css ファイルは容量削減のため minify しています。