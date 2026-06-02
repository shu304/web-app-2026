require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();

app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// メッセージ一覧を取得
app.get('/api/messages', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM messages ORDER BY created_at ASC'
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB取得エラー' });
  }
});

// メッセージを保存
app.post('/api/messages', async (req, res) => {
  try {
    const { username, message } = req.body;

    const result = await pool.query(
      'INSERT INTO messages (username, text) VALUES ($1, $2) RETURNING *',
      [username, message]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB保存エラー' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `サーバが起動しました： http://localhost:${process.env.PORT || 3000}`,
  );
});