import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let calcular = document.getElementById('calcular');
let resultadoNombre = document.getElementById('resultadoNombre');
let resultadoImpuesto = document.getElementById('resultadoImpuesto');

calcular.addEventListener('click', calculoImpuesto);

function calculoImpuesto(event) {
	event.preventDefault();
	let cliente = document.getElementById('nombre').value;
	let impuesto = document.getElementById('impuesto').value;
	let deduccion = document.getElementById('deduccion').value;

	let impuesto1 = new Impuestos(impuesto, deduccion);
	let cliente1 = new Cliente(cliente, impuesto1);
	if (cliente != '' && impuesto != '' && deduccion != '') {
		resultadoNombre.innerHTML = `<strong>${cliente1.nombreCliente}</strong>`;
		resultadoImpuesto.innerHTML = `<strong>${cliente1.calcularImpuesto()}</strong>`;
		//
		console.log(impuesto1); //
		console.log(cliente1); //
		console.log(cliente1.calcularImpuesto(impuesto1));
	} else {
		alert('Todos los campos deben ser completados');
	}
}
