require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

async function main() {
  try {
    await client.connect();
    console.log('DBに接続しました');

    await client.end();
    console.log('接続を終了しました');
  } catch (err) {
    console.error(err);
  }
}

main();