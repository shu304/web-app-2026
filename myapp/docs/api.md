# API仕様

## POST /api/messages
説明：メッセージを送信する

リクエスト：
{
  "username": "例：太郎",
  "message": "例：こんにちは"
}

レスポンス：
{
  "username": "例：太郎",
  "message": "例：こんにちは"
}

## GET /api/messages
説明：メッセージ一覧を返す（今回は未実装でもOK）

レスポンス：
[
  {
    "username": "例：太郎",
    "message": "例：こんにちは"
  }
]