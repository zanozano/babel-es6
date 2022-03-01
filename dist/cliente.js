'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true,
});
exports['default'] = void 0;

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

var Cliente = /*#__PURE__*/ (function () {
	function Cliente(nombre) {
		var impuestos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Cliente);

		this._nombre = nombre;
		this._impuestos = impuestos;
	} // NOMBRE CLIENTE

	_createClass(Cliente, [
		{
			key: 'nombreCliente',
			get: function get() {
				return this._nombre;
			},
			set: function set(newNombre) {
				this._nombre = newNombre;
			}, // IMPUESTO
		},
		{
			key: 'impuestosCliente',
			get: function get() {
				return this._impuestos;
			},
			set: function set(newImpuestos) {
				this._impuestos = newImpuestos;
			},
		},
		{
			key: 'calcularImpuesto',
			value: function calcularImpuesto() {
				var resultadoImpuesto =
					(this.impuestosCliente.montoBrutoAnualCliente -
						this.impuestosCliente.deduccionesCliente) *
					0.21;
				return resultadoImpuesto;
			},
		},
	]);

	return Cliente;
})();

exports['default'] = Cliente;
