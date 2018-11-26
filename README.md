# Yandex API Wrapper

## How to use

### Translating a text

```js
    const Yandex = require('yandex-api-wrapper');
    Yandex.translate('en', 'ja', 'Hello').then((data) => {
        console.log(data.text); // 今日は。
    });
```

### Get list of available languages

```js
    const Yandex = require('yandex-api-wrapper');
    Yandex.getAvailableLanguages().then((data) => {
        console.log(data.dirs); 
        /*
        {"dirs":["az-ru","be-bg","be-cs","be-de","be-en","be-es","be-fr","be-it","be-pl", ... ]}
        */
    });
```

### Detect the language of a text

```js
    const Yandex = require('yandex-api-wrapper');
    Yandex.detectLanguage('今日は。').then((lang) => {
        console.log(lang);  // ja
    });
```

## Testing

1. Clone this repository
2. Run `npm i`
3. Run `npm test` 
4. That's all.
5. What are you expecting???
6. WHY YOU KEEP READING THIS
7. (ノಠ益ಠ)ノ彡┻━┻

## Contributing 

1. Fork & clone the repository
2. Run `npm i`
3. Code your thingies
4. Run `npm test`
5. If all goes well go to next step!
6. Submit a pull request!!!!!!!!!!!!!!!!!

## Credits


This package is licensed under the **MIT** license **(see the LICENSE file for more information)**. I have neither created or contributed to the development of Yandex, and this package is not affiliated with its developers in any way. SO STOP
