angular.module('hello-world.js', [])
.directive('helloWorld', [
	function _directive_() {
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'ctrl',
			scope: {
				punctuation: '@helloPunctuation'
			},
			template: `

				<div ng-bind="ctrl.message + ctrl.punctuation"></div>

			`,
			controller: [
				function _controller_() {
					var ctrl = this;

					angular.extend(ctrl, {
						message: "Hello world"
					});

				}
			]
		}
	}
]);
