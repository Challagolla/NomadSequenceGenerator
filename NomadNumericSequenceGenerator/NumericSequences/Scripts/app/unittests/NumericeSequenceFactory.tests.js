'use strict';
 
describe('sequenceGenerator: ', function(){

	var sequenceGenerator;
	  
	// excuted before each "it" is run.
	beforeEach(function (){

		// load the module.
		module('NumericSequnce');

		inject(function(_sequenceGenerator_) {
			sequenceGenerator = _sequenceGenerator_;
		});
	});

	describe("allNumbers", function () {
			
			//Validations
		it("blank", function () {
				var numbersArray = sequenceGenerator.allNumbers();
				expect(numbersArray.length).toEqual(0);
		});

		it("negative", function() {
			var numbersArray = sequenceGenerator.allNumbers(-1);
			expect(numbersArray.length).toEqual(0);
		});
			//sequence
		it("numeric sequence", function () {
				var numbersArray = sequenceGenerator.allNumbers(5);

				expect(numbersArray[0]).toEqual(0);
				expect(numbersArray[1]).toEqual(1);
				expect(numbersArray[2]).toEqual(2);
				expect(numbersArray[3]).toEqual(3);
				expect(numbersArray[4]).toEqual(4);
				expect(numbersArray[5]).toEqual(5);
		});

	});

	describe("oddNumbers", function() {
					//Validations
		it("blank", function () {
				var numbersArray = sequenceGenerator.oddNumbers();
				expect(numbersArray.length).toEqual(0);
		});

		it("negative", function () {
				var numbersArray = sequenceGenerator.oddNumbers(-1);
				expect(numbersArray.length).toEqual(0);
		});
			//sequnce
		it("odd numbers sequence", function () {
				var numbersArray = sequenceGenerator.oddNumbers(6);
				expect(numbersArray[0]).toEqual(1);
				expect(numbersArray[1]).toEqual(3);
				expect(numbersArray[2]).toEqual(5);
		});
	});

	describe("evenNumbers", function() {
			//Validations
		it("blank", function () {
				var numbersArray = sequenceGenerator.evenNumbers();
				expect(numbersArray.length).toEqual(0);
		});

		it("negative", function () {
				var numbersArray = sequenceGenerator.evenNumbers(-1);
				expect(numbersArray.length).toEqual(0);
		});
			//sequnce
		it("even numbers sequence", function () {
				var numbersArray = sequenceGenerator.evenNumbers(6);
				expect(numbersArray[0]).toEqual(0);
				expect(numbersArray[1]).toEqual(2);
				expect(numbersArray[2]).toEqual(4);
				expect(numbersArray[3]).toEqual(6);
		});
	});

	describe("customeSequence", function () {

			//Validations
			it("blank", function () {
					var numbersArray = sequenceGenerator.customeSequence();
					expect(numbersArray.length).toEqual(0);
			});

		it("negative", function () {
					var numbersArray = sequenceGenerator.customeSequence(-1);
					expect(numbersArray.length).toEqual(0);
			});
			//custom sequence
			it("custom sequence", function () {
			var numbersArray = sequenceGenerator.customeSequence(8);
			expect(numbersArray[0]).toEqual('Z');
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(2);
			expect(numbersArray[3]).toEqual('C');
			expect(numbersArray[4]).toEqual(4);
			expect(numbersArray[5]).toEqual('E');
			expect(numbersArray[6]).toEqual('C');
			expect(numbersArray[7]).toEqual(7);
			expect(numbersArray[8]).toEqual(8);
		});
	});

	describe("fibonacci", function () {
			//Validations
			it("blank", function () {
					var numbersArray = sequenceGenerator.fibonacci();
					expect(numbersArray.length).toEqual(0);
			});

			it("negative", function () {
					var numbersArray = sequenceGenerator.fibonacci(-1);
					expect(numbersArray.length).toEqual(0);
			});
			//fibnacci sequence
		it(" generates expected numbers", function() {
			var numbersArray = sequenceGenerator.fibonacci(13);
			expect(numbersArray[0]).toEqual(0);
			expect(numbersArray[1]).toEqual(1);
			expect(numbersArray[2]).toEqual(1);
			expect(numbersArray[3]).toEqual(2);
			expect(numbersArray[4]).toEqual(3);
			expect(numbersArray[5]).toEqual(5);
			expect(numbersArray[6]).toEqual(8);
			expect(numbersArray[7]).toEqual(13);
		});
	});
});


