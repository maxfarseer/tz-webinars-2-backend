# Backend для тестового задания #2

Для наброска был взят [бойлерплейт](https://github.com/developit/express-es6-rest-api).

### Поддерживаемые маршруты:

```js
// Корневой адрес API: http://localhost:8080/api/v1

// POST /validate (введены корректные данные: username = 'max', password = '12345'
{
  "status": "ok",
  "data": {
    "id": 1
  }
}

// POST /validate (введены некорректные данные)
{
  "status": "err",
  "message": "wrong_email_or_password"
}

// GET /user-info/:id - где, id - идентификатор пользователя
// GET /user-info/1
{
  "status": "ok",
  "data": {
    "userId": 1,
    "city": "Москва",
    "languages": [
      "English",
      "Русский"
    ],
    "social": [
      {
        "label": "vk",
        "link": "vk.com/maxpfrontend"
      },
      {
        "label": "telegram",
        "link": "t.me/maxpfrontend"
      },
      {
        "label": "web",
        "link": "https://maxpfrontend.ru"
      },
      {
        "label": "youtube",
        "link": "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q"
      },
      {
        "label": "twitter",
        "link": "https://twitter.com/MaxPatsiansky"
      },
      {
        "label": "twitch",
        "link": "http://twich.tv/maxpfrontend"
      }
    ]
  }
}

// GET /user-info/2
{
  "status": "err",
  "message": "user_not_found"
}

// GET /news
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "title": "Не слишком ли быстро мы переходим на беспилотные автомобили",
      "text": "Автопроизводители и высокотехнологичные компании, тратящие миллиарды долларов на развитие беспилотных автомобилей и грузовиков, вовсю рекламируют автоматический транспорт, который, по их мнению, будет безопаснее, чище и сделает общество более мобильным."
    },
    {
      "id": 2,
      "title": "Интеллектуальная собственность: где заканчивается цитирование и начинается плагиат",
      "text": "Компьютерная программа или роман — это в первую очередь идея, творческий замысел. Но человек, купивший книгу, хоть и стал собственником её обложки и страниц, не может присвоить себе то, что написал или нарисовал автор, и продавать романы под своим именем. Иными словами, интеллектуальная собственность — это придуманный и созданный человеком результат. И одновременно с этим — права на него."
    }
  ]
}
```

### Запуск

```sh
# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
