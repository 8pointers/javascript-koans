var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.eventDispatcher = function (base) {
	'use strict';
	var listeners = [];
	base.addEventListener = function (type, listener, priority) {
		if (!listener) {
			listener = type;
			type = 'default';
		}
		listeners.push({
			type: type,
			listener: listener,
			priority: priority
		});
	};
	base.listener = function () {
		return listeners[0].listener;
	};
	base.dispatchEvent = function (type) {
		var args = Array.prototype.slice.call(arguments);
		if (args.length === 1) {
			type = 'default';
		} else {
			args.shift();
		}
		listeners
			.filter(function (listenerDetails) {
				return listenerDetails.type === type;
			})
			.sort(function (firstListenerDetails, secondListenerDetails) {
				return secondListenerDetails.priority - firstListenerDetails.priority;
			})
			.some(function (listenerDetails) {
				try {
					return listenerDetails.listener.apply(undefined, args) === false;
				} catch (error) {
				}
			});
	};
	base.createObservableProperty = function (propertyName) {
		var propertyValue;
		base['on' + propertyName + 'Changed'] = base.addEventListener.bind(base, propertyName + 'Changed');
		base['set' + propertyName] = function (value) {
			propertyValue = value;
			base.dispatchEvent(propertyName + 'Changed', value);
		};
		base['get' + propertyName] = function () {
			return propertyValue;
		};
	};
	return base;
};
