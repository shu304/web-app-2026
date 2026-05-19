const express = require('express');
const app = express();
const PORT = 3000;

// JSONを扱うために必要
app.use(express.json());

// 静的ファイル
app.use(express.static('public'));

// POSTエンドポイント
app.post('/api/messages', (req, res) => {
  // 分割代入
  const { username, message } = req.body;

  // 省略記法
  const newMessage = { username, message };

  // ターミナルに表示
  console.log(newMessage);

  // レスポンス
  res.json(newMessage);
});

app.listen(PORT, () => {
  console.log(`サーバー起動 http://localhost:${PORT}`);
});