/* Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 5%, Si se recibieron entre 5 y 8 millones el descuento es del 10% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento */
function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let acumuladorOriente=0;
	let acumuladorOccidente=0;
	let acumuladorSecreto=0;
	let tipoB;
	let importeBruto=0;
let descuento =0;
let pormedioV;
let totalCantidad;
let respuesta;
	do{
		origen=prompt("ingrese origen oriente, occidente o secreto")
while (origen!="oriente" && origen!="occidente"&& origen!="secreto") {
	origen=prompt(",Errorreingrese origen oriente, occidente o secreto")
}
cantidad=parseInt(prompt("ingrese cantidad entre 500000 y 2500000"))
while (isNaN(cantidad)|| cantidad<500000 || cantidad>2500000) {
	cantidad=parseInt (prompt("Error,reingrese cantidad entre 500000 y 2500000"))
}
costo=parseFloat(prompt("ingrese costo entre 1 millón y 5 millones de pesos"))
while (isNaN(costo)|| costo <1000000 || costo>5000000) {
	costo=parseFloat(prompt("Error,reingrese costo entre 1 millón y 5 millones de pesos"))
}
importeBruto=importeBruto+costo;
switch (origen) {
case "occidente":
acumuladorOccidente=acumuladorOccidente+cantidad;

break;

case "oriente":
acumuladorOriente=acumuladorOriente+cantidad
break;

case "secreto":
	acumuladorSecreto=acumuladorSecreto+cantidad
break;
}
	respuesta=prompt("desea ingresar nuevamente");
	}while(respuesta== si );


totalCantidad=acumuladorOccidente+acumuladorOriente+acumuladorSecreto;
pormedioV=totalCantidad-acumuladorOriente-acumuladorOccidente;

	if (acumuladorOriente<=acumuladorOccidente && acumuladorOriente<acumuladorSecreto) {
	tipoB="oriente"
	}else if(acumuladorOccidente<acumuladorOriente && acumuladorOccidente<acumuladorSecreto){
	tipoB="occidente"
	}else{
	tipoB="secreto"
	}
	if (cantidad>10000000) {
		descuento=importeBruto*100/25;
		alert("Se realizo un descuento del 25%"+descuento)
	}
	else if (cantidad>=5000000 && cantidad<=8000000000) {
		descuento=importeBruto*100/15;
		alert("Se realizo un descuento de del 15%"+descuento)
	}
	alert("El origen que envio menor cantidad de vacunas es "+tipoB)
	alert("El promedio por vuelo de vacunas llegadas de Occidente es de "+ pormedioV)
	alert("El total sin descuentos a pagar por los gastos de los viajes "+importeBruto)
	

}
