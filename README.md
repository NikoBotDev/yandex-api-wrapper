# Yandex API Wrapper

## How to use

### Translating a text

```js
    const Yandex = require('yandex-api-wrapper');co
    const API = new Yandex('Your-api-key');
    API.translate('en', 'pt', 'Hi').then((data) => {
        console.log(data.text); // ['Oi']。
    });
```

### Get list of available languages

```js
    const Yandex = require('yandex-api-wrapper');
    const API = new Yandex('Your-api-key');
    API.getAvailableLanguages().then((data) => {
        console.log(data.dirs); 
        /*
        {"dirs":["az-ru","be-bg","be-cs","be-de","be-en","be-es","be-fr","be-it","be-pl", ... ]}
        */
    });
```

### Detect the language of a text

```js
    const Yandex = require('yandex-api-wrapper');
    const API = new Yandex('Your-api-key');
    API.detectLanguage('Hello').then((lang) => {
        console.log(lang);  // en
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

## Obs
The **japanese** translation is a bit problematic so if you need to translate 
something to japanese i'd recommend using google translation api.

## Credits


This package is licensed under the **MIT** license **(see the LICENSE file for more information)**. I have neither created or contributed to the development of Yandex, and this package is not affiliated with its developers in any way. SO STOP
