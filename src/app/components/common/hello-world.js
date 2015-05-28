angular.module('hello-world.js', [])
.directive('helloWorld', [
	function _directive_() {
		return {
			restrict: 'E',
			controllerAs: 'ctrl',
			bindToController: true,
			scope: {},
			template: `

				<div ng-bind="ctrl.message"></div>

			`,
			controller: [
				function _controller_() {
					var ctrl = this;
					angular.extend(ctrl, {
						message: "Hello world!"
					});
				}
			]
		}
	}
]);
