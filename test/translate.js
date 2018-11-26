const chai = require("chai");
const expect = chai.expect;
const Yandex = require('../lib/yandex');
describe('Get translation data from Yandex API', function() {
    it('Should translate a text to the given target lang', async () => {
        const { text, code } = await Yandex.translate('en', 'ja', 'Hello');
        expect(code).to.be.equal(200);
        expect(text[0]).to.be.equal('今日は。');
    });
    it('Should fetch all the available languages', async () => {
        const data = await Yandex.getAvailableLanguages();
        expect(data.dirs).to.be.a('array');
    });
    it('Should detect the language of the text', async () => {
        const lang = await Yandex.detectLanguage('Hello');
        expect(lang).to.be.equal('en');
    });
});
