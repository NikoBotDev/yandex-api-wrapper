function ResponseError(res) {
    this.statusCode = res.status;
    this.statusText = res.statusText;
    this.headers = res.headers;
    this.message = this.status + ' ' + this.statusText;
}

module.exports = ResponseError;