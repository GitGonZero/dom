
    





//clase edificio
function Edificio(){
 	this.calle = "";
  	this.numero = "";
  	this.codigoPostal = "";
 	this.plantas = 0;
  	this.puertas = new Array();
  	this.propietario = new Array();
  
  
  
//metodos de la clase
	this.crearEdificio = function(calle, numero, codigoPostal){
	this.calle = calle;
	this.numero = numero;
	this.codigoPostal = codigoPostal;       
	
 	 };  
  	this.modificaCalle= function(calle){
	 	this.calle = calle;
  	};
  	this.modificaNumero = function(numero){
    	this.numero = numero;
  	};  
  	this.modificaCodigoPostal = function(codigoPostal){
    	this.codigoPostal = codigoPostal;
  	};  
	  
    
	
  	this.agregarPlantasYPuertas= function(numeroPlantas, numeroPuertas){
		this.plantas = numeroPlantas;
		this.puertas= numeroPuertas;
    };
  	this.agregarPropietario = function(propietario){
		this.propietario= propietario
		}
		
	function mostrarCalle(){
		return this.calle;
    };
	function mostrarNumero(){
		return this.numero;
    };
	function mostrarCodigoPostal(){
		return this.CodigoPostal;
    };
	function mostrarPropietario(){
		return this.propietario;
    };
	
  	
}



