/*global jasmine, window*/
(function () {
	'use strict';
	var jasmineEnv = jasmine.getEnv(),
		htmlReporter = new jasmine.HtmlReporter(),
		currentWindowOnload = window.onload;
	window.__ = 'fill this value in';
	jasmineEnv.updateInterval = 1000;
	jasmineEnv.addReporter(htmlReporter);
	jasmineEnv.specFilter = function (spec) {
		return htmlReporter.specFilter(spec);
	};
	window.onload = function () {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		jasmineEnv.execute();
	};
}());
