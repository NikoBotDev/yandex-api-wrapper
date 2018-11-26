const fetch = require('node-fetch');
const url = 'https://translate.yandex.net/api/v1/tr.json';
const qs = require('querystring');
const languages = require('./languages');
const ResponseError = require('./Errors/ResponseError');
const InvalidLanguageError = require('./Errors/InvalidLanguageError');
const id = '39688439.5bfc60ad.fbed9092-2-0';
function Yandex() {
    throw new ReferenceError('This class can not be instantiated!');
}
/**
 * @typedef {Object} Translated
 * @prop {number} code api response status code
 * @prop {string} lang from - to data
 * @prop {string[]} text translated text 
 */
/**
 * @param {string} from source language
 * @param {string} to target language
 * @param {string} text text to be translated
 * @return {Promise<?Translated>} Response data from api
 * @throws {ResponseError} When the api returns a non-ok status code
 * @see https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
 */
Yandex.translate = function translate(from, to, text) {
    return new Promise((resolve, reject) => {
        if(!from || !to || !text) {
            throw new Error('Too few arguments');
        }
        checkIfIsValid(from, to).then(() => {
            const query = qs.stringify({
                id,
                lang: from + '-' + to,
                text,
                srv: 'tr-text'
            });
            fetch(url + '/translate' +  '?' + query).then((res) => {
                if (!res.ok) {
                    reject(new ResponseError(res));
                }
                return res.json();
            }).then(resolve);
        }).catch((err) => {
            reject(err);
        });
    });
}
/**
 * @typedef {Object} Languages
 * @prop {string[]} dirs An array in from-to format to be used in api
 * @prop {?Object} langs An object containing all the valid languages 
 */
/**
 * @throws {ResponseError} When the api returns a non-ok status code
 * @return {Promise<Languages>}
 * @see https://tech.yandex.com/translate/doc/dg/reference/getLangs-docpage/
 */
Yandex.getAvailableLanguages = function getAvailableLanguages() {
    return new Promise((resolve, reject) => {
        const query = qs.stringify({
            id,
            srv: 'tr-text',
            reason: 'auto'
        });
        fetch(url + '/getLangs' + '?' + query).then((res) => {
            if (!res.ok) {
                reject(new ResponseError(res));
            }
            return res.json();
        }).then(resolve);
    });
}
/**
 * @param {string} text The text to detect the language for.
 * @return {Promise<string>} Detected language
 * @throws {ResponseError} When the api returns a non-ok status code
 * @see https://tech.yandex.com/translate/doc/dg/reference/detect-docpage/
 */
Yandex.detectLanguage = function detectLanguage(text) {
    return new Promise((resolve, reject) => {
        const query = qs.stringify({
            text: encodeURIComponent(text),
            sid: id.substring(id.indexOf('-'), 0),
            srv: 'tr-text'
        });
        fetch(url + '/detect' + '?' + query).then((res) => {
            if (!res.ok) {
                reject(new ResponseError(res));
            }
            return res.json();
        }).then((data) => resolve(data.lang));
    });   
}

function checkIfIsValid(from, to) {
    return new Promise((resolve, reject) => {
        if(Object.keys(languages).indexOf(from) < 0 && Object.values(languages).indexOf(from) < 0) {
            reject(new InvalidLanguageError(from, 'The `from` language is invalid!'));
        } else {
            resolve();
        }
        if(Object.keys(languages).indexOf(to) < 0 && Object.values(languages).indexOf(to) < 0) {
            reject(new InvalidLanguageError(to, 'The `target` language is invalid!'));
        } else {
            resolve();
        }
    });    
}

module.exports = Yandex;