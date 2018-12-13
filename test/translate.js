const chai = require("chai");
const expect = chai.expect;
const Yandex = require('../lib/yandex');
const API = new Yandex('Your-api-key');
describe('Get translation data from Yandex API', function() {
    it('Should translate a text to the given target lang', async () => {
        const { text, code } = await API.translate('en', 'pt', 'Hi');
        expect(code).to.be.equal(200);
        expect(text[0]).to.be.equal('Oi');
    });
    it('Should fetch all the available languages', async () => {
        const data = await API.getAvailableLanguages();
        expect(data.dirs).to.be.a('array');
    });
    it('Should detect the language of the text', async () => {
        const lang = await API.detectLanguage('Hello');
        expect(lang).to.be.equal('en');
    });
});
