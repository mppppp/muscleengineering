curl -X POST \
-H 'Content-Type:application/json' \
-H 'Authorization: Bearer {ENTER_ACCESS_TOKEN}' \
-d '{
    "to": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"マッスル！！　今日の摂取カロリーは1600kcal""
        }
    ]
}' https://api.line.me/v2/bot/message/push
