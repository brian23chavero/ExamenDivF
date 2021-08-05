/* El centro de hisopado Error,rede Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus dato;s en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positi;vo", "negativo")
-nacionalidad ("argeError,rentina", "extranjero")
-cepa("delta", "alfa", "delta", "ninguna")
Para poder ingresa
edad=r ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta */
function mostrar()
{
let contadorVueltas;
let nacionalidad;
let resultado;
let edad;
let cepa;
let tipoCepa;
let flagA=1;
let edadJ;
let contadorA=0;
let contadorP=0;
let totalC;
let porcetajeA;
let porcetajeB;
let contadorCepa=0;
let totalCepas;
let contadorCepas2=0;
let nombreJ;
let promedio1;

for (contadorVueltas =0;contadorVueltas <8;contadorVueltas++) {

    nacionalidad=prompt("ingrese nacionalidad argentina o extrangero");
while (nacionalidad !="argentina" && nacionalidad!="extrangero") {
    nacionalidad=prompt("Error,reingrese nacionalidad argentina o extrangero");
}

edad=parseInt(prompt("ingrese edad mayor a 18 y menor a 65"));
while (isNaN(edad) || edad<18 || edad>65) {
    edad=parseInt(prompt("Error,reingrese edad mayor a 18 y menor a 65"));
}
cepa = prompt(" ingrese cepa: ").toLowerCase();
        if (resultado == "negativo" && cepa != "ninguno") {
            cepa = prompt("El resulado tiene que ser negativo: ");
        } else {
            while (!(cepa == "delta" || cepa == "alfa" || cepa == "beta")) {
                cepa = prompt("Error! , ingrese una cepa: ");
            }
        }
if (nacionalidad=="extrangero" && cepa=="delta") {
    contadorCepas2++;
}else if (cepa=="delta") {
    contadorCepa++;
}


if (cepa=="alfa") {    
    contadorA++;
}


if (flagA || edad<edadJ) {
    edadJ=edad;
    nombreJ=nombre;
}
if (resultado=="negativo") {
    contadorN++;
}
else{
    contadorP++;
}
}

/* a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta */
totalC=contadorN+contadorP;
porcetajeB=totalC-contadorN;
porcetajeA=totalC-contadorp;
totalCepas=contadorCepas2+contadorCepa;
promedio1=totalCepas-contadorCepa;



if (contadorA<=contadorB ) {
tipoCepa="alfa";
}else{
tipoCepa="delta";
}

alert("los positivos son "+porcetajeB);
alert("Los negativos son "+porcetajeA);
alert("La cepa menos encontrada es "+tipoCepa);
alert("La edad del argentino de menor edad es "+edadJ+" y su nombre es "+nombreJ);
alert("La cantidad de personas extrangeras contagiadas con la delta son "+ promedio1);

}
