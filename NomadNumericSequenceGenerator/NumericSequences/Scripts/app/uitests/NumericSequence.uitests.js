describe('Numbers Page', function () {

    var numbersPage = require('./PageObjects/NumericSequenceUIPage.js');

    var expectNoErrorMessages = function () {
        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();
    };

    var expectNoSequences = function () {
        expect(numbersPage.AllNumbers.getText()).toEqual('');
        expect(numbersPage.OddNumbers.getText()).toEqual('');
        expect(numbersPage.EvenNumbers.getText()).toEqual('');
        expect(numbersPage.CustomNumbers.getText()).toEqual('');
        expect(numbersPage.FibonacciNumbers.getText()).toEqual('');
    };

    beforeEach(function () {
        numbersPage.navigate();
    });

    it('Default input integer 9', function () {
        expect(numbersPage.Value.getAttribute('value')).toEqual('9');

        expectNoErrorMessages();

        expect(numbersPage.AllNumbers.getText()).toEqual('0, 1, 2, 3, 4, 5, 6, 7, 8, 9');
        expect(numbersPage.OddNumbers.getText()).toEqual('1, 3, 5, 7, 9');
        expect(numbersPage.EvenNumbers.getText()).toEqual('0, 2, 4, 6, 8');
        expect(numbersPage.CustomNumbers.getText()).toEqual('Z, 1, 2, C, 4, E, C, 7, 8, C');
        expect(numbersPage.FibonacciNumbers.getText()).toEqual('0, 1, 1, 2, 3, 5, 8');
    });

    it('When 1 is entred', function () {
    		numbersPage.Value.clear();
        numbersPage.Value.sendKeys(1);

        expect(numbersPage.Value.getAttribute('value')).toEqual('1');

        expectNoErrorMessages();

        expect(numbersPage.AllNumbers.getText()).toEqual('0, 1');
        expect(numbersPage.OddNumbers.getText()).toEqual('1');
        expect(numbersPage.EvenNumbers.getText()).toEqual('0');
        expect(numbersPage.CustomNumbers.getText()).toEqual('Z, 1');
        expect(numbersPage.FibonacciNumbers.getText()).toEqual('0, 1, 1');
    });

    it('When input is blank', function () {
        numbersPage.Value.clear();

        expect(numbersPage.errorRequired.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();

        expectNoSequences();
    });

    it('When Characters entered as input', function () {
        numbersPage.Value.clear();
        numbersPage.Value.sendKeys('1e');

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).not.toBeTruthy();

        expectNoSequences();
    });

    it('When decimals entered', function () {
        numbersPage.Value.clear();
        numbersPage.Value.sendKeys('1.4');

        expect(numbersPage.errorRequired.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorAtleastone.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorDigitsonly.isDisplayed()).not.toBeTruthy();
        expect(numbersPage.errorWholenumber.isDisplayed()).toBeTruthy();

        expectNoSequences();
    });  
});

