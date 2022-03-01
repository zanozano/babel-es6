export default class Impuestos {
	constructor(montoBrutoAnual = 0, deducciones = 0) {
		this._montoBrutoAnual = montoBrutoAnual;
		this._deducciones = deducciones;
	}
	// MONTO BRUTO ANUAL
	get montoBrutoAnualCliente() {
		return this._montoBrutoAnual;
	}
	set montoBrutoAnualCliente(newMontoBrutoAnual) {
		this._montoBrutoAnual = newMontoBrutoAnual;
	}
	// DEDUCCIONES
	get deduccionesCliente() {
		return this._deducciones;
	}
	set deduccionesCliente(newDeducciones) {
		this._deducciones = newDeducciones;
	}
}
