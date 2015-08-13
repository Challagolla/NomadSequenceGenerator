var NumericSequenceUIPage = function () {
    this.AllNumbers = element(by.id('sequence-all'));
    this.OddNumbers = element(by.id('sequence-odd'));
    this.EvenNumbers = element(by.id('sequence-even'));
    this.CustomNumbers = element(by.id('sequence-custom'));
    this.FibonacciNumbers = element(by.id('sequence-fibonacci'));

    this.Value = element(by.id('inputvalue'));

    this.errorRequired = element(by.id('error-required'));
    this.errorAtleastone = element(by.id('error-atleastone'));
    this.errorDigitsonly = element(by.id('error-digitsonly'));
    this.errorWholenumber = element(by.id('error-wholenumber'));

    this.navigate = function () {
        browser.get('http://localhost:5066/');
    };
};

module.exports = new NumericSequenceUIPage();
