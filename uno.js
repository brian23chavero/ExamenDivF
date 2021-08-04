/* Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna de la hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada */
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let promedio;
	let contador=0;
	let acumulador=0;
	let contadorChina=0;
	let acumuladorChina=0;
	let flagJ=1;
	let nombreJ;
	let edadJ;
	let vacunaJ;
	let contadorAmericana=0;
	let acumuladorAmericana=0;
	let totalDosis;
	let contador2=0;
	let contador1=0;
	let promedioDosis;
	let contadorA2=0;
	let promedioC;
	let contadorA=0;
	let contadorC=0;
	let contadorR=0;
	let acumuladorA=0;
	let acumuladorC=0;
	let acumuladorR=0;
	let totalA;
	let respuesta;
	let promedioA;
	let tipoC;
	do{
	
		

		nombre=prompt("ingrese nombre minimo 3 caracteres y maximo 10");
		while (!(nombre.length >= 3 && nombre.length <= 10)){ 
		nombre=prompt("Error,reingrese nombre minimo 3 caracteres y maximo 10");
		}
		edad=parseInt(prompt("ingrese edad no menor a 11 años"));
		while (isNaN(edad) || edad<11) {
			edad=parseInt(prompt("Error,reingrese edad no menor a 11 años"));
		}
		vacuna=prompt("ingrese vacuna rusa,china o americana")
		while (vacuna!="americana" && vacuna!="china" && vacuna!="rusa") {
			vacuna=prompt("Error,reingrese vacuna rusa,china o americana")
		}
		dosis=prompt("ingrese dosis “p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis");
		while (dosis!="p" && dosis!="s") {
			dosis=prompt("Error,reingrese dosis “p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis");
		}
		sexo=prompt("ingrese sexo masculino o femenino");
		while (sexo!="masculino" && sexo!="femenino") {
			sexo=prompt("Error,reingrese sexo masculino o femenino");
		}
		if (edad>11 && edad<18) {
			contadorA2++;
		}

		switch (vacuna) {
		case "americana":
		contadorA++;
		break;
		
		case "china":
		contadorC++;
		break;
		
		case "rusa":
		contadorR++;
		break;
		}

if (vacuna=="china") {
	acumuladorChina=acumuladorChina+edad;
}else if (vacuna=="americana" && edad<"18"){
acumuladorAmericana=acumuladorAmericana+edad;
}
			if (flagJ && sexo=="masculino" || edad<edadJ) 
			{
				edadJ=edad;
				nombreJ=nombre;
				vacunaJ=vacuna;
				flagJ=0;
			}

		if (dosis=="p") {
			contador1++;
		}else if (dosis=="s"){
			contador2++;
		}


	respuesta=prompt("desea ingresar nuevamente");

	}while(respuesta== "si" );
	
	
	totalDosis=contador1+contador2;
	promedioDosis=totalDosis-contador2;

if (contadorA>=contadorC && contadorA>contadorR) {
tipoC="americana";
}else if(contadorC>contadorA && contadorC>contadorR){
tipoC="china";
}else{
tipoC="rusa"
}
promedioC=acumuladorChina/contadorC;
totalA=contadorA+contadorA2;
promedioA=totalA-contadorA;

alert("El promedio de edad de los que se vacunaron con la vacuna china es :"+promedioC);
alert("El hombre mas joven que se vacuno es "+nombreJ+" y la vacuna es "+vacunaJ+" y su edad es "+edadJ);
alert("En el promedio de edad de lso que se vacunaron con la americana es "+promedioA+" sobre un total de "+totalA);
alert("Los que estan vacunados con la primera dosis son "+promedioDosis+" sobre un total de "+totalDosis);
	alert("La vacuna menos utilizada es "+tipoC);
}
/* 		a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna de la hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada */

