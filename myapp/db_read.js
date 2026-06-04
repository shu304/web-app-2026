require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

async function main() {
  try {
    // practice テーブルのデータを取得
    const result = await pool.query(
        'SELECT * FROM practice ORDER BY id DESC LIMIT 5'
    );

    // rows に取得データが配列で入る
    console.log(result.rows);

  } catch (err) {
    console.error('エラーが発生しました:', err);
  } finally {
    await pool.end();
  }
}

main();