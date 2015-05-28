'use strict';

angular.module('MainApp', ['ngAnimate', 'ngTouch']);
(function () {

	var items = ['one', 'two', 'three'];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			console.log(item);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
})();
//# sourceMappingURL=angular-modules.combined.es6.js.map
//# sourceMappingURL=angular-modules.combined.js.map