'use strict';

var _cliente = _interopRequireDefault(require('./cliente.js'));

var _impuestos = _interopRequireDefault(require('./impuestos.js'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var calcular = document.getElementById('calcular');
var resultadoNombre = document.getElementById('resultadoNombre');
var resultadoImpuesto = document.getElementById('resultadoImpuesto');
calcular.addEventListener('click', calculoImpuesto);

function calculoImpuesto(event) {
	event.preventDefault();
	var cliente = document.getElementById('nombre').value;
	var impuesto = document.getElementById('impuesto').value;
	var deduccion = document.getElementById('deduccion').value;
	var impuesto1 = new _impuestos['default'](impuesto, deduccion);
	var cliente1 = new _cliente['default'](cliente, impuesto1);

	if (cliente != '' && impuesto != '' && deduccion != '') {
		resultadoNombre.innerHTML = '<strong>'.concat(cliente1.nombreCliente, '</strong>');
		resultadoImpuesto.innerHTML = '<strong>'.concat(cliente1.calcularImpuesto(), '</strong>'); //

		console.log(impuesto1); //

		console.log(cliente1); //

		console.log(cliente1.calcularImpuesto());
	} else {
		alert('Todos los campos deben ser completados');
	}
}
