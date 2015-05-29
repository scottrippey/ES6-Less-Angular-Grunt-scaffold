angular.module('hello-world.js', [])
.directive('helloWorld', [
	function _directive_() {
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
				helloPunctuation: '@'
			},
			template: `

				<div>
					{{ vm.message + vm.helloPunctuation }}
				</div>

			`.trim(),
			controller: function _HelloWorldController() {
				var vm = this;

				angular.extend(vm, {
					message: "Hello world"
				});
			}
		}
	}
]);
