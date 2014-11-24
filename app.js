
var app = angular.module('calcApp', []);

app
	.controller('mainCtrl', function($scope, calcService) {

	var getHistory = function() {
		$scope.histories = calcService.getHistory();
	}

	$scope.calcAnswer = function() {
		$scope.answer = calcService.calculate($scope.prob);
		getHistory();
		$scope.prob = '';
	}
})
	.service('calcService', function() {
		historyArr = [];

		return {
			calculate: function(prob) {
				var val1 = Number(prob.val1);
				var val2 = Number(prob.val2);
				var op;
				var result;
				switch(prob.operator) {
					case 'add':
						result = val1 + val2;
						op = "+";
						break;
					case 'subtract':
						result = val1 - val2;
						op = "-";
						break;
					case 'multiply':
						result = val1 * val2;
						op = "*";
						break;
				}
				historyArr.unshift(val1 + " " + op + " " + val2 + " = " + result)
				return result;
			},

			getHistory: function() {
				return historyArr;
			}
		}
	})

