export default class Cliente {
	constructor(nombre, impuestos = {}) {
		this._nombre = nombre;
		this._impuestos = impuestos;
	}
	// NOMBRE CLIENTE
	get nombreCliente() {
		return this._nombre;
	}
	set nombreCliente(newNombre) {
		this._nombre = newNombre;
	}
	// IMPUESTO
	get impuestosCliente() {
		return this._impuestos;
	}
	set impuestosCliente(newImpuestos) {
		this._impuestos = newImpuestos;
	}
	calcularImpuesto() {
		let resultadoImpuesto =
			(this.impuestosCliente.montoBrutoAnualCliente -
				this.impuestosCliente.deduccionesCliente) *
			0.21;
		return resultadoImpuesto;
	}
}
