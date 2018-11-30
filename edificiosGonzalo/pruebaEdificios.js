//============================================================================ 
//evento que controla la carga del documento
var coki= "hola";
var listaEdificios = new Array();
        window.addEventListener("load", gestionarEventos, false);
//============================================================================ 
//esta funcion gestiona los eventos que se van a realizar

function gestionarEventos(){
'use strict'
		document.getElementById("inicio").addEventListener("click", irInicio, false);
		document.getElementById("gestionarEdificios").addEventListener("click", gestionEdificio, false);
}

function limpiarCaja(){

var cajaSubmenu = document.createElement("div")
        cajaSubmenu.setAttribute("id", "cajaSubmenu");
        document.getElementById("primera").appendChild(cajaSubmenu);
}



//============================================================================ 

function gestionEdificio(){
	if ((document.getElementById("menuCajaPestañas") == null)){
	
	var borrarBotonGestionar = document.getElementById("gestionarEdificios");
			borrarBotonGestionar.parentNode.removeChild(borrarBotonGestionar);
			var zonaMensajes = document.getElementById("zonaMensajes");
			zonaMensajes.parentNode.removeChild(zonaMensajes);
			var ponerMensaje = document.getElementById("ayudas");
			var elementoAyuda = document.createElement("p");
			elementoAyuda.setAttribute("id", "pAyuda");
			var textoAyuda = document.createTextNode("Selecciona una de las opciones que aparecen debajo:");
			ponerMensaje.appendChild(elementoAyuda);
			elementoAyuda.appendChild(textoAyuda);
			
			// crear formulario que contenga botones
			var formularioPestañas = document.createElement("form");
			formularioPestañas.setAttribute("name", "menuCajaPestañas");
			formularioPestañas.setAttribute("id", "menuCajaPestañas");
			document.getElementById("primera").appendChild(formularioPestañas);
			var cajaPestañas = document.createElement("div");
			cajaPestañas.setAttribute("id", "cajaPestañas");
			//botones
	
			//boton crear
			var campoBotonDinamico1 = document.createElement("input");
			campoBotonDinamico1.setAttribute("value", "Crear Edificios");
			campoBotonDinamico1.setAttribute("type", "button");
			campoBotonDinamico1.setAttribute("id", "crearEdificios");
			campoBotonDinamico1.setAttribute("class", "navBtn");
			campoBotonDinamico1.setAttribute("title", "pulse para empezar a crear.");
			//boton modificar
			var campoBotonDinamico2 = document.createElement("input");
			campoBotonDinamico2.setAttribute("value", "Modificar Edificios");
			campoBotonDinamico2.setAttribute("type", "button");
			campoBotonDinamico2.setAttribute("id", "botonModificarEdificios");
			campoBotonDinamico2.setAttribute("class", "navBtn");
			campoBotonDinamico2.setAttribute("title", "pulse para modificar edificios ya creados.");
			//boton imprimir
			var campoBotonDinamico3 = document.createElement("input");
			campoBotonDinamico3.setAttribute("value", "Imprimir Edificios");
			campoBotonDinamico3.setAttribute("type", "button");
			campoBotonDinamico3.setAttribute("id", "botonImprimirEdificios");
			campoBotonDinamico3.setAttribute("class", "navBtn");
			campoBotonDinamico3.setAttribute("title", "pulse para imprimir los edificios ya creados.");
			//boton eliminar
			var campoBotonDinamico4 = document.createElement("input");
			campoBotonDinamico4.setAttribute("value", "Eliminar ");
			campoBotonDinamico4.setAttribute("type", "button");
			campoBotonDinamico4.setAttribute("id", "botonEliminarEdificios");
			campoBotonDinamico4.setAttribute("class", "navBtn");
			//introduzco la caja donde aparecerán los dialogos seleccionados 
	
			limpiarCaja();
			//introduzco los botones en el formulario
			formularioPestañas.appendChild(cajaPestañas);
			cajaPestañas.appendChild(campoBotonDinamico1);
			cajaPestañas.appendChild(campoBotonDinamico2);
			cajaPestañas.appendChild(campoBotonDinamico3);
			cajaPestañas.appendChild(campoBotonDinamico4);
			//creo eventos para los botones del formulario
			campoBotonDinamico1.addEventListener("click", crearFormulario, false);
			campoBotonDinamico2.addEventListener("click", modificar, false);
			campoBotonDinamico3.addEventListener("click", imprimir, false);
			campoBotonDinamico4.addEventListener("click", eliminar, false);
	}
}

function nuevoEdificio(){
 var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
 var soloNumeros = /^([0-9])*$/;
 var mal = false;
//recojo valores para asignarselos a las variables	 
var calle = document.getElementById('formularioDinamicoCalle').value;
	calle = calle.trim();
	if (calle.length == 0){
		alert("No puede dejar el campo calle vacío");
		mal = true;	
	}
	 if (!soloLetras.test(calle)) {
        alert("Unicamente se admiten letras en el campo Calle.");
        mal = true;   
     }

var numero = document.getElementById('formularioDinamicoNumero').value;
	numero = numero.trim();
	if (numero.length == 0){
		alert("No puede dejar el campo numero vacío");
		mal = true;
	}
	 if (!soloNumeros.test(numero)) {
        alert("Unicamente se admiten numeros en el campo numero.");
		mal = true;
	 }
var codigoPostal = document.getElementById('formularioDinamicoCodigoPostal').value;
	codigoPostal = codigoPostal.trim();
	if (codigoPostal.length == 0){
		alert("No puede dejar el campo codigo postal vacío");
		mal = true;
	}
	if (!soloNumeros.test(codigoPostal)) {
        alert("Unicamente se admiten numeros en el campo codigo postal.");
		mal = true;
	 }

var antiguaAyuda = document.getElementById("pAyuda");
        if (antiguaAyuda != null){
			antiguaAyuda.parentNode.removeChild(antiguaAyuda);
		}
var articulo = document.getElementById("ayudas");


        var etiquetaSelect = document.createElement("label");
        etiquetaSelect.setAttribute("id", "inicioSelect");
        etiquetaSelect.setAttribute("for", "listaEdificios");
        var textoEtiqueta = document.createTextNode("lista de edificios: ");
        var elementoSelect = document.createElement("select");
        elementoSelect.setAttribute("id", "listaEdificios");
        elementoSelect.setAttribute("name", "listaEdificios");
        if (document.getElementById("inicioSelect") == null){
articulo.appendChild(etiquetaSelect);
}
if (textoEtiqueta == null){
etiquetaSelect.appendChild(textoEtiqueta);
}
if (document.getElementById("listaEdificios") == null){
articulo.appendChild(elementoSelect);
}

//creo constructor
var unEdificio = new Edificio();
	if (!mal== true){
        unEdificio.crearEdificio(calle, numero, codigoPostal);
        listaEdificios.push(unEdificio);
        var etiquetaSelect = document.getElementById("listaEdificios");
        var elementoOption = document.createElement("option");
        elementoOption.setAttribute("value", listaEdificios.length);
		
       	 var textoEdificios = "Edificio Calle: " + unEdificio.calle + ", numero: " + unEdificio.numero + ". codigo postal: " + unEdificio.codigoPostal;
		 	
		
        var contieneTexto = document.createTextNode(textoEdificios);
        elementoOption.appendChild(contieneTexto);
        etiquetaSelect.appendChild(elementoOption);
        /*var borrarBotonGestionar = document.getElementById("gestionarEdificios");
         borrarBotonGestionar.parentNode.removeChild(borrarBotonGestionar);*/
        /*var borrarSelect = document.getElementById("inicioSelect");
         borrarSelect.parentNode.removeChild(borrarSelect);*/
			
        }
}

//============================================================================ 
function crearFormulario(){
if (document.getElementById("cajaSubmenu") != null){
borrarCaja();
}
limpiarCaja();
        if ((document.getElementById("formularioDinamico")) == null){

//creo el formulario
var formulario = document.createElement("form");
        formulario.setAttribute("name", "formularioDinamico");
        formulario.setAttribute("id", "formularioDinamico");
        document.getElementById("cajaSubmenu").appendChild(formulario);
        //input calle
        var nombreCalle = document.createElement("p");
        var etiquetaCalle = document.createElement("label");
        etiquetaCalle.setAttribute("id", "etiquetaCalle");
        var calleTexto = document.createTextNode("Calle: ");
        var campoCalle = document.createElement("input");
        campoCalle.setAttribute("type", "text");
        campoCalle.setAttribute("id", "formularioDinamicoCalle");
        campoCalle.setAttribute("name", "calle");
        campoCalle.setAttribute("class", "navDinamic");
        campoCalle.setAttribute("placeholder", "Ej: Habana");
        campoCalle.setAttribute("accesskey", "c");
        campoCalle.setAttribute("title", "una vez escrita la calle, pulse enter para acceder al siguiente campo, y así sucesivamente");
        ///input numero
        var nombreNumero = document.createElement("p");
        var etiquetaNumero = document.createElement("label");
        etiquetaNumero.setAttribute("id", "etiquetaNumero");
        var numeroTexto = document.createTextNode("Numero: ");
        var campoNumero = document.createElement("input");
        campoNumero.setAttribute("type", "text");
        campoNumero.setAttribute("id", "formularioDinamicoNumero");
        campoNumero.setAttribute("name", "numero");
        campoNumero.setAttribute("class", "navDinamic");
        campoNumero.setAttribute("placeholder", "Ej: 7");
        campoNumero.setAttribute("accesskey", "n");
        //input Codigo Postal
        var nombreCodigoPostal = document.createElement("p");
        var etiquetaCodigoPostal = document.createElement("label");
        etiquetaCodigoPostal.setAttribute("id", "etiquetaCodigoPostal");
        var codigoPostalTexto = document.createTextNode("codigo Postal: ");
        var campoCodigoPostal = document.createElement("input");
        campoCodigoPostal.setAttribute("type", "text");
        campoCodigoPostal.setAttribute("id", "formularioDinamicoCodigoPostal");
        campoCodigoPostal.setAttribute("name", "codPos");
        campoCodigoPostal.setAttribute("class", "navBte");
        campoCodigoPostal.setAttribute("placeholder", "Ej: 32005");
        campoCodigoPostal.setAttribute("accesskey", "p");
        //boton para añadir plantas y puertas
        var campobotonAnhadirPlantasYPuertas = document.createElement("input");
        campobotonAnhadirPlantasYPuertas.setAttribute("value", "Agregar Plantas y Puertas");
        campobotonAnhadirPlantasYPuertas.setAttribute("type", "button");
        campobotonAnhadirPlantasYPuertas.setAttribute("id", "botonPlantas");
        campobotonAnhadirPlantasYPuertas.setAttribute("class", "navBtn");
        campobotonAnhadirPlantasYPuertas.addEventListener("click", AgregarPlantasYPuertas, false);
        //boton enviar
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Crear Edificio");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "botonCrearEdificio");
        campoBotonDinamico.setAttribute("class", "navBtn");
        campoBotonDinamico.addEventListener("click", nuevoEdificio, false);
        //campoBotonDinamico.addEventListener("click",borrarCaja,false);
        //campoBotonDinamico.addEventListener("click",,false);

        //añado dinamicamente los elementos creados anteriormente	
        formulario.appendChild(nombreCalle);
        nombreCalle.appendChild(etiquetaCalle);
        etiquetaCalle.appendChild(calleTexto);
        etiquetaCalle.appendChild(campoCalle);
        formulario.appendChild(nombreNumero);
        nombreNumero.appendChild(etiquetaNumero);
        etiquetaNumero.appendChild(numeroTexto);
        etiquetaNumero.appendChild(campoNumero);
        formulario.appendChild(nombreCodigoPostal);
        nombreCodigoPostal.appendChild(etiquetaCodigoPostal);
        etiquetaCodigoPostal.appendChild(codigoPostalTexto);
        etiquetaCodigoPostal.appendChild(campoCodigoPostal);
        formulario.appendChild(campobotonAnhadirPlantasYPuertas);
        formulario.appendChild(campoBotonDinamico);
        //eventos
        campobotonAnhadirPlantasYPuertas.addEventListener("click", AgregarPlantasYPuertas, false);
        document.getElementById("formularioDinamicoCalle").addEventListener("keypress", cambioDeEtiquetas, false);
        function cambioDeEtiquetas(evt){
			if (evt.keyCode == 13){
	
				if (formularioDinamicoCalle.type == "text"){
				formularioDinamicoNumero.focus();
						
				}
	
			}
        }
document.getElementById("formularioDinamicoNumero").addEventListener("keypress", cambioDeEtiquetasDos, false);
        function cambioDeEtiquetasDos(evt){
			if (evt.keyCode == 13){
				if (formularioDinamicoNumero.type == "text"){
				formularioDinamicoCodigoPostal.focus();
				}
			}
        }
}

}

//============================================================================ 
function AgregarPlantasYPuertas(){
if ((document.getElementById("AgregarPlantasYPuertas") == null)){
//input plantas
var nombrePlanta = document.createElement("p");
        var etiquetaPlanta = document.createElement("label");
        etiquetaPlanta.setAttribute("id", "etiquetaPlanta");
        var plantaTexto = document.createTextNode("Numero de Plantas a agregar: ");
        var campoPlanta = document.createElement("input");
        campoPlanta.setAttribute("type", "text");
        campoPlanta.setAttribute("id", "campoPlanta");
        campoPlanta.setAttribute("name", "plantaTexto");
        campoPlanta.setAttribute("class", "navDinamic");
        campoPlanta.setAttribute("placeholder", "Ej: 7");
        campoPlanta.setAttribute("accesskey", "1");
        ///input puertas
        var nombrePuerta = document.createElement("p");
        var etiquetaPuerta = document.createElement("label");
        etiquetaPuerta.setAttribute("id", "etiquetaPuerta");
        var puertaTexto = document.createTextNode("Numero de puertas a agregar: ");
        var campoPuerta = document.createElement("input");
        campoPuerta.setAttribute("type", "text");
        campoPuerta.setAttribute("id", "campoPuertas");
        campoPuerta.setAttribute("name", "puertas");
        campoPuerta.setAttribute("class", "navDinamic");
        campoPuerta.setAttribute("placeholder", "Ej: puertas");
        campoPuerta.setAttribute("accesskey", "2");
        //boton enviar
        var nombreBotonDinamico = document.createElement("p");
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Agregar Plantas Y Puertas");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "agregarPlantasYPuertas");
        campoBotonDinamico.setAttribute("class", "navBtn");
        var borrarBoton = document.getElementById("botonCrearEdificio");
        borrarBoton.parentNode.removeChild(borrarBoton);
        var borrarBotonPlantas = document.getElementById("botonPlantas");
        borrarBotonPlantas.parentNode.removeChild(borrarBotonPlantas);
        document.getElementById("formularioDinamico").appendChild(nombrePlanta);
        nombrePlanta.appendChild(etiquetaPlanta);
        nombrePlanta.appendChild(plantaTexto);
        nombrePlanta.appendChild(campoPlanta);
        document.getElementById("formularioDinamico").appendChild(nombrePuerta);
        nombrePuerta.appendChild(etiquetaPuerta);
        nombrePuerta.appendChild(puertaTexto);
        nombrePuerta.appendChild(campoPuerta);
        document.getElementById("formularioDinamico").appendChild(borrarBoton);
        borrarBoton.addEventListener("click", borrarCaja, false);
        borrarBoton.addEventListener("click", gestionEdificio, false);
        borrarBoton.addEventListener("click", introducirPlantasPuertas, false);
        if (document.getElementById("campoPlanta")){

document.getElementById("campoPlanta").addEventListener("keypress", pasoDeEtiquetas, false);
        function pasoDeEtiquetas(evt){
        if (evt.keyCode == 13){
        if (campoPlanta.type == "text"){
        campoPuerta.focus();
        }

        }
        }
}

}
}
function introducirPlantasPuertas(){
var plantas = document.getElementById("campoPlanta").value;
        if (plantas < 0){
alert("no puedes introducir un numero negativo de plantas");
} else{
this.listaEdificios[i].plantas = plantas;
}
var puertas = document.getElementById("campoPuerta").value;
        if (puertas < 0){
alert("no puedes introducir un numero negativo de puertas");
} else{
this.listaEdificios[i].puertas = puertas;
}
}
//============================================================================ 

function irInicio(){
window.location = "index.html";
        }
//============================================================================


function modificar(){
//document.getElementById("botonModificarEdificios").disabled=true;

borrarCaja();
        limpiarCaja();
        if ((document.getElementById("modificar") == null)){
//nueva caja para contener los nuevos dialogos


var formulario = document.createElement("form");
        formulario.setAttribute("name", "formularioDinamico");
        formulario.setAttribute("id", "formularioDinamico");
        document.getElementById("cajaSubmenu").appendChild(formulario);
        //creo elemento calle con con boton calle
        var elementoCalle = document.createElement("p");
        elementoCalle.setAttribute("id", "pCalle");
        var botonModCalle = document.createElement("input");
        botonModCalle.setAttribute("value", "Modificar Calle");
        botonModCalle.setAttribute("type", "button");
        botonModCalle.setAttribute("id", "botonModCalle");
        botonModCalle.setAttribute("class", "navBtn");
        // un <p>boton modificar numero	
        var elementoNumero = document.createElement("p");
        elementoNumero.setAttribute("id", "pNumero");
        var botonModNumero = document.createElement("input");
        botonModNumero.setAttribute("value", "Modificar Numero");
        botonModNumero.setAttribute("type", "button");
        botonModNumero.setAttribute("id", "botonModNumero");
        botonModNumero.setAttribute("class", "navBtn");
        //codigo postal	
        var elementoCp = document.createElement("p");
        elementoCp.setAttribute("id", "pCp");
        var botonModCp = document.createElement("input");
        botonModCp.setAttribute("value", "Modificar CodigoPostal");
        botonModCp.setAttribute("type", "button");
        botonModCp.setAttribute("id", "botonModCp");
        botonModCp.setAttribute("class", "navBtn");
        //coloco los elementos y botones	
        formulario.appendChild(elementoCalle);
        elementoCalle.appendChild(botonModCalle);
        formulario.appendChild(elementoNumero);
        elementoNumero.appendChild(botonModNumero);
        formulario.appendChild(elementoCp);
        elementoCp.appendChild(botonModCp);
        //eventos gestionados por estos botones		
        botonModCalle.addEventListener("click", modificarCalle, false);
        botonModNumero.addEventListener("click", modificarNumero, false);
        botonModCp.addEventListener("click", modificarCodigoPostal, false);
        document.getElementById("crearEdificios").addEventListener("click", crearFormulario, false);
}

}
//============================================================================ 
function modificarCalle(){

if ((document.getElementById("modificarCalle") == null)){
//borro el boton
var cambiarCalle = document.getElementById("botonModCalle");
        cambiarCalle.parentNode.removeChild(cambiarCalle);
        //creo un nuevo formulario
        var formulario = document.createElement("form");
        formulario.setAttribute("name", "modificarCalle");
        formulario.setAttribute("id", "modificarCalle");
        document.getElementById("pCalle").appendChild(formulario);
        //creo la calle
        var nombreCalleNueva = document.createElement("p");
        nombreCalleNueva.setAttribute("id", "nombreCalleNueva");
        var etiquetaCalleNueva = document.createElement("label");
        etiquetaCalleNueva.setAttribute("id", "etiquetaCalleNueva");
        var calleNuevaTexto = document.createTextNode("Nuevo nombre de la calle: ");
        var campoCalleNueva = document.createElement("input");
        campoCalleNueva.setAttribute("type", "text");
        campoCalleNueva.setAttribute("id", "valorModificarCalle");
        campoCalleNueva.setAttribute("name", "calle");
        campoCalleNueva.setAttribute("class", "navDinamic");
        campoCalleNueva.setAttribute("accesskey", "c");
        campoCalleNueva.setAttribute("placeholder", "Ej: Cardenal Quevedo");
        //coloco los elementos	
        formulario.appendChild(nombreCalleNueva);
        formulario.appendChild(etiquetaCalleNueva);
        etiquetaCalleNueva.appendChild(calleNuevaTexto);
        formulario.appendChild(campoCalleNueva);
        //creo  boton	
        var nombreBotonDinamico = document.createElement("p");
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Modificar");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "botonModificarCalle");
        campoBotonDinamico.setAttribute("class", "navBtn");
        formulario.appendChild(campoBotonDinamico);
        //evento del boton
        campoBotonDinamico.addEventListener("click", eventosModCalle, false);
        function eventosModCalle(){
        /*var elementosIntroducirCalle =document.getElementById("modificarCalle");
         elementosIntroducirCalle.parentNode.removeChild(elementosIntroducirCalle);*/
       	var calleNueva = document.getElementById("valorModificarCalle").value;
				  listaEdificios[document.getElementById("listaEdificios").selectedIndex].modificaCalle(calleNueva);
				  //document.getElementById("nombreEdificios")= "Edificio Calle: " + calleNueva + ", numero: " + unEdificio.numero + ". codigo postal: " + unEdificio.codigoPostal;
				 
				  borrarElemento("pCalle");
                //var elemento = document.getElementById("pCalle");
                var botonModCalle = document.createElement("input");
                botonModCalle.setAttribute("value", "Modificar Calle");
                botonModCalle.setAttribute("type", "button");
                botonModCalle.setAttribute("id", "botonModCalle");
                botonModCalle.setAttribute("class", "navBtn");
                document.getElementById("pCalle").appendChild(botonModCalle);
                botonModCalle.addEventListener("click", modificarCalle, false);
				//botonModCalle.addEventListener("click", cambiaCalle, false);
				
                /*var calle = document.getElementById("formularioDinamicoCalle");
                 modificarCalle(calle);
                 alert(Edificio.calle);*/
				 //var calleAnterior = listaEdificios[document.getElementById("listaEdificios").selectedIndex].calle
				 //alert(calleAnterior);
				 
               // listaEdificios.modificaCalle = document.getElementById("formularioDinamicoCalle").value;
        }
}
}

//============================================================================ 
function modificarNumero(){

var cambiarNumero = document.getElementById("botonModNumero");
        cambiarNumero.parentNode.removeChild(cambiarNumero);
        //creo un nuevo formulario
        var formulario = document.createElement("form");
        formulario.setAttribute("name", "modificarNumero");
        formulario.setAttribute("id", "modificarNumero");
        document.getElementById("pNumero").appendChild(formulario);
        //creo la calle
        var nombreNumeroNuevo = document.createElement("p");
        nombreNumeroNuevo.setAttribute("id", "nombreNumeroNuevo");
        var etiquetaNumeroNuevo = document.createElement("label");
        etiquetaNumeroNuevo.setAttribute("id", "etiquetaCalleNueva");
        var NumeroNuevoTexto = document.createTextNode("Nuevo numero: ");
        var campoNumeroNuevo = document.createElement("input");
        campoNumeroNuevo.setAttribute("type", "text");
        campoNumeroNuevo.setAttribute("id", "valorModificarNumero");
        campoNumeroNuevo.setAttribute("name", "calle");
        campoNumeroNuevo.setAttribute("class", "navDinamic");
        campoNumeroNuevo.setAttribute("accesskey", "c");
        campoNumeroNuevo.setAttribute("placeholder", "Ej: Cardenal Quevedo");
        //coloco los elementos	
        formulario.appendChild(nombreNumeroNuevo);
        formulario.appendChild(etiquetaNumeroNuevo);
        etiquetaNumeroNuevo.appendChild(NumeroNuevoTexto);
        formulario.appendChild(campoNumeroNuevo);
        //creo  boton	
        var nombreBotonDinamico = document.createElement("p");
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Modificar");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "botonModificarNumero");
        campoBotonDinamico.setAttribute("class", "navBtn");
        formulario.appendChild(campoBotonDinamico);
        campoBotonDinamico.addEventListener("click", eventosModNumero, false);
        function eventosModNumero(){
        /*var elementosIntroducirCalle =document.getElementById("modificarCalle");
         elementosIntroducirCalle.parentNode.removeChild(elementosIntroducirCalle);*/
		var numeroNuevo = document.getElementById("valorModificarNumero").value;
				 listaEdificios[document.getElementById("listaEdificios").selectedIndex].modificaNumero(numeroNuevo);
				  
       			 borrarElemento("pNumero");
                //var elemento = document.getElementById("pCalle");
        var botonModNumero = document.createElement("input");
                botonModNumero.setAttribute("value", "Modificar Numero");
                botonModNumero.setAttribute("type", "button");
                botonModNumero.setAttribute("id", "botonModNumero");
                botonModNumero.setAttribute("class", "navBtn");
                document.getElementById("pNumero").appendChild(botonModNumero);
                botonModNumero.addEventListener("click", modificarNumero, false);
        }
//unEdificio.modificaNumero = document.getElementById("modificarNumero").value;
        }
//============================================================================ 
function modificarCodigoPostal(){

var cambiarCp = document.getElementById("botonModCp");
        cambiarCp.parentNode.removeChild(cambiarCp);
        //creo un nuevo formulario
        var formulario = document.createElement("form");
        formulario.setAttribute("name", "modificarCp");
        formulario.setAttribute("id", "modificarCp");
        document.getElementById("pCp").appendChild(formulario);
        //creo la calle
        var nombreCpNuevo = document.createElement("p");
        nombreCpNuevo.setAttribute("id", "nombreCpNuevo");
        var etiquetaCp = document.createElement("label");
        etiquetaCp.setAttribute("id", "etiquetaetiquetaCp");
        var cpTexto = document.createTextNode("Nuevo Codigo Postal: ");
        var campoCp = document.createElement("input");
        campoCp.setAttribute("type", "text");
        campoCp.setAttribute("id", "valorModificarCp");
        campoCp.setAttribute("name", "Cp");
        campoCp.setAttribute("class", "navDinamic");
        campoCp.setAttribute("accesskey", "c");
        campoCp.setAttribute("placeholder", "Ej: 90210");
        //coloco los elementos	
        formulario.appendChild(nombreCpNuevo);
        formulario.appendChild(etiquetaCp);
        formulario.appendChild(cpTexto);
        formulario.appendChild(campoCp);
        //creo  boton	
        var nombreBotonDinamico = document.createElement("p");
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Modificar");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "botonModificarCp");
        campoBotonDinamico.setAttribute("class", "navBtn");
        formulario.appendChild(campoBotonDinamico);
        campoBotonDinamico.addEventListener("click", eventosModCp, false);
        function eventosModCp(){
        /*var elementosIntroducirCalle =document.getElementById("modificarCalle");
         elementosIntroducirCalle.parentNode.removeChild(elementosIntroducirCalle);*/
		 var cPNuevo = document.getElementById("valorModificarCp").value;
				 listaEdificios[document.getElementById("listaEdificios").selectedIndex].modificaCodigoPostal(cPNuevo);
				  
				  
        borrarElemento("pCp");
                //var elemento = document.getElementById("pCalle");
                var botonModPc = document.createElement("input");
                botonModPc.setAttribute("value", "Modificar Codigo Postal");
                botonModPc.setAttribute("type", "button");
                botonModPc.setAttribute("id", "botonModCp");
                botonModPc.setAttribute("class", "navBtn");
                document.getElementById("pCp").appendChild(botonModPc);
                botonModCp.addEventListener("click", modificarCodigoPostal, false);
        }

//unEdificio.modificaCodigoPostal = document.getElementById("modificarCp").value;
        }
//============================================================================ 
function agregarPropietario(){
if ((document.getElementById("agregarPropietario") == null) && 
	(document.getElementById("AgregarPlantasYPuertas") == null) && 
	(document.getElementById("modificarNumero") == null) && 
	(document.getElementById("formularioDinamico") == null) && 
	(document.getElementById("modificarCalle") == null)){
	var formulario = document.createElement("form");
        formulario.setAttribute("name", "agregarPropietario");
        formulario.setAttribute("id", "agregarPropietario");
        document.getElementById("primera").appendChild(formulario);
        var nombreAgregarPropietario = document.createElement("p");
        var etiquetaAgregarPropietario = document.createElement("label");
        etiquetaAgregarPropietario.setAttribute("id", "etiquetaAgregarPropietario");
        var agregarPropietarioTexto = document.createTextNode("Nuevo propietario: ");
        var campoAgregarPropietario = document.createElement("input");
        campoAgregarPropietario.setAttribute("type", "text");
        campoAgregarPropietario.setAttribute("id", "AgregarPropietario");
        campoAgregarPropietario.setAttribute("name", "campoAgregarPropietario");
        campoAgregarPropietario.setAttribute("class", "navDinamic");
        campoAgregarPropietario.setAttribute("placeholder", "Ej: Jose Martinez Rodriguez ");
        campoAgregarPropietario.setAttribute("accesskey", "k");
        document.getElementById("agregarPropietario").appendChild(nombreAgregarPropietario);
        document.getElementById("agregarPropietario").appendChild(etiquetaAgregarPropietario);
        document.getElementById("agregarPropietario").appendChild(campoAgregarPropietario);
        document.getElementById("etiquetaAgregarPropietario").appendChild(agregarPropietarioTexto);
        var nombreBotonDinamico = document.createElement("p");
        var campoBotonDinamico = document.createElement("input");
        campoBotonDinamico.setAttribute("value", "Agregar Propietario");
        campoBotonDinamico.setAttribute("type", "button");
        campoBotonDinamico.setAttribute("id", "botonAgregarPropietario");
        campoBotonDinamico.setAttribute("class", "navBtn");
        document.getElementById("agregarPropietario").appendChild(campoBotonDinamico);
}
}

//=======================================================================
function imprimir(){
//document.getElementById("botonModificarEdificios").disabled=true;

borrarCaja();
        limpiarCaja();
        if ((document.getElementById("imprimir") == null)){
//nueva caja para contener los nuevos dialogos


var formulario = document.createElement("form");
        formulario.setAttribute("name", "formularioDinamico");
        formulario.setAttribute("id", "formularioDinamico");
        document.getElementById("cajaSubmenu").appendChild(formulario);
        //creo elemento calle con con boton calle
        var elementoImpEdificio = document.createElement("p");
        elementoImpEdificio.setAttribute("id", "pImpEdificio");
        var botonImpEdificio = document.createElement("input");
        botonImpEdificio.setAttribute("value", "Imprimir Edificio");
        botonImpEdificio.setAttribute("type", "button");
        botonImpEdificio.setAttribute("id", "botonImpEdificio");
        botonImpEdificio.setAttribute("class", "navBtn");
        // un <p>boton modificar numero	
        var elementoImpCalle = document.createElement("p");
        elementoImpCalle.setAttribute("id", "pImpCalle");
        var botonImpCalle = document.createElement("input");
        botonImpCalle.setAttribute("value", "Imprimir Calle");
        botonImpCalle.setAttribute("type", "button");
        botonImpCalle.setAttribute("id", "botonImpCalle");
        botonImpCalle.setAttribute("class", "navBtn");
        //codigo Numero	
        var elementoImpNumero = document.createElement("p");
        elementoImpNumero.setAttribute("id", "pImpNumero");
        var botonImpNumero = document.createElement("input");
        botonImpNumero.setAttribute("value", "Imprimir Numero");
        botonImpNumero.setAttribute("type", "button");
        botonImpNumero.setAttribute("id", "botonModCp");
        botonImpNumero.setAttribute("class", "navBtn");
        //codigo postal	
        var elementoImpCodigoPostal = document.createElement("p");
        elementoImpCodigoPostal.setAttribute("id", "pImpCp");
        var botonImpCodigoPostal = document.createElement("input");
        botonImpCodigoPostal.setAttribute("value", "Imprimir CodigoPostal");
        botonImpCodigoPostal.setAttribute("type", "button");
        botonImpCodigoPostal.setAttribute("id", "botonImpCp");
        botonImpCodigoPostal.setAttribute("class", "navBtn");
        //coloco los elementos y botones	
        formulario.appendChild(elementoImpEdificio);
        elementoImpEdificio.appendChild(botonImpEdificio);
        formulario.appendChild(elementoImpCalle);
        elementoImpCalle.appendChild(botonImpCalle);
        formulario.appendChild(elementoImpNumero);
        elementoImpNumero.appendChild(botonImpNumero);
        formulario.appendChild(elementoImpCodigoPostal);
        elementoImpCodigoPostal.appendChild(botonImpCodigoPostal);
        //eventos gestionados por estos botones		
        //botonImpEdificio.addEventListener("click",imprimirEdificio,false);
        botonImpCalle.addEventListener("click", imprimirCalle, false);
        botonImpNumero.addEventListener("click",imprimirNumero,false);
		botonImpCodigoPostal.addEventListener("click",imprimirCodigoPostal,false);
		botonImpEdificio.addEventListener("click", imprimirEdificio, false);

        //botonImpCodigoPostal.addEventListener("click",imprimirCodigoPostal,false);
        document.getElementById("crearEdificios").addEventListener("click", crearFormulario, false);
}
}

//============================================================================ 
//CREAR UN NODO Y ESCRIBIR EN ÉL
function pruebaCreacion(){
var p = document.createElement("p");
        var texto = document.createTextNode("tonto");
        p.appendChild(texto);
        document.body.appendChild(p);
}
//============================================================================ 
//CREAR UNA NUEVA PÿGINA
function paginaNueva(){
var p = document.createElement("p");
        var texto = document.createTextNode("Nuevo Edificio");
}
//============================================================================ 
function nuevoArticulo(){
var p = document.createElement("section");
        var texto = document.createTextNode("NuevoEdificio");
        p.appendChild(texto);
        document.getElementById("primera").appendChild(p);
}
//============================================================================ 

function crearEdificio(){
if (document.getElementById("nuevaSeccion") == null){
calle = document.getElementById("formularioDinamicoCalle").value;
        numero = document.getElementById("formularioDinamicoNumero").value;
        codigoPostal = document.getElementById("formularioDinamicoCodigoPostal").value;
}
}
//============================================================================ 


function borrarElemento(idParentNode) {

padre = document.getElementById(idParentNode);
        while (padre.childNodes.length > 0) {
padre.removeChild(padre.childNodes[padre.childNodes.length - 1]);
}
}
//============================================================================ 
function borrarCaja(){
document.getElementById("cajaSubmenu").parentNode.removeChild(cajaSubmenu);
        }

//============================================================================ 
function imprimirCalle(){

	alert(listaEdificios[document.getElementById("listaEdificios").selectedIndex].calle);
}

//======================================

function imprimirEdificio(){
	alert ("Edificio Situado en la calle: " +listaEdificios[document.getElementById("listaEdificios").selectedIndex].calle + " con numero: " + listaEdificios[document.getElementById("listaEdificios").selectedIndex].numero + " cp: " + listaEdificios[document.getElementById("listaEdificios").selectedIndex].codigoPostal );	
}
function imprimirNumero(){

	alert(listaEdificios[document.getElementById("listaEdificios").selectedIndex].numero);
}
function imprimirCodigoPostal(){

	alert(listaEdificios[document.getElementById("listaEdificios").selectedIndex].codigoPostal);
}

function eliminar(){

}


function getCookie(c_name){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1){
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1){
		c_value = "hola";
	}else{
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1){
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=coki + "=" + "hola";
	
}

if(getCookie(coki)!="1"){
	document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie(){
	setCookie(coki,'hola',365);
	document.getElementById("barraaceptacion").style.display="none"
	/*var calle = listaEdificios[document.getElementById("listaEdificios").selectedIndex].calle;
	document.cookie="edificio = calle";*/
	//localStorage.setItem("calleEdificio1","calle");
}
 

