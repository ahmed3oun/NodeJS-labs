var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
}
module.exports = class Quote {
  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
  save() {
    quotes[this.author] = this.text;
  }
  static getAllQuotes() {
    return quotes;
  }
  static getOneQuote(author) {
    return quotes[author];
  }
  static deleteQuote(name) {
    delete quotes[name];
  }
  edit() {
    quotes[this.author] = this.text;
  }
}
