function InvalidLanguageError(lang, message) {
    this.lang = lang;
    this.message = message;
}

module.exports = InvalidLanguageError;