NumericSequnce.controller('SequnceGeneratorControl', ['$scope', 'sequenceGenerator', function ($scope, sequenceGenerator) {
    'use strict';

    // Default value for the input box that creates nice sequences
    $scope.Value = 9;

    var updateSequences = function (upperBound) {
        $scope.allNumbers = sequenceGenerator.allNumbers(upperBound);
        $scope.oddNumbers = sequenceGenerator.oddNumbers(upperBound);
        $scope.evenNumbers = sequenceGenerator.evenNumbers(upperBound);
        $scope.customeSequence = sequenceGenerator.customeSequence(upperBound);
        $scope.fibonacci = sequenceGenerator.fibonacci(upperBound);
    }

    // Generate sequences for default input value when the page loads
    updateSequences($scope.Value);

    $scope.ValueChanged = function () {
        updateSequences($scope.Value);
    };

    $scope.ShowOrHide = function () {
    		$scope.d
    };

    $scope.ResettoDefault = function () {
    		$scope.Value = 9;
    		updateSequences($scope.Value);
    };

}]);


