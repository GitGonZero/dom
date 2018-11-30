
/*Gonzalo Martínez Sías DAW2*/

//creo los vectores que emplearé mas tarde
var mostrar = [" "," "," "," "," "," "," "," "];
var todasSoluciones = [ [ "", 0], [ "", 0], [ "", 0], [ "", 0], [ "", 0], ["", 0], ["", 0], ["",   0]];
var tablaSopa = [ [ "G", "C", "Z", "G", "K", "G", "H", "S", "R", "S", "Y", "R", "D", "N", "S", "E"], [ "A", "F", "H", "O", "Ñ", "W", "E", "B", "S", "T", "E", "R", "N", "M", "R", "T"], [ "Y", "M", "V", "N", "N", "P", "Q", "U", "Y", "N", "L", "G", "E", "Z", "T", "T"],  ["U", "U", "F", "G", "A", "D", "U", "R", "Y", "G", "C", "C", "S", "V", "N", "T"], [ "E", "N", "B", "J", "M", "H", "I", "I", "D", "V", "O", "I", "C", "V", "M", "T"], [ "A", "G", "E", "G", "F", "D", "P", "N", "G", "C", "O", "S", "G", "F", "D", "T"], [ "B", "A", "O", "N", "E", "R", "O", "A", "A", "B", "I", "S", "A", "D", "N", "T"], [ "O", "M", "H", "L", "B", "U", "A", "L", "F", "S", "C", "N", "K", "L", "N", "T"], [ "P", "A", "C", "N", "T", "Y", "K", "F", "H", "J", "T", "E", "S", "F", "N", "T"], [ "P", "Z", "V", "J", "T", "I", "L", "N", "D", "A", "I", "I", "F", "A", "X", "T" ], ["I", "S", "G", "E", "S", "C", "B", "L", "K", "Z", "C", "M", "A", "M", "V", "T"], [ "W", "I", "F", "A", "L", "C", "O", "N", "C", "R", "E", "S", "T", "A", "A", "T"], ["A", "S", "M", "L", "A", "A", "P", "Z", "I", "L", "I", "A", "H", "T", "O", "T"], [ "S", "M", "E", "G", "M", "C", "G", "Y", "V", "E", "R", "T", "R", "X", "Z", "T"], [ "U", "J", "I", "A", "J", "I", "U", "G", "S", "O", "L", "A", "U", "G", "S", "T"], [ "A", "F", "X", "U", "L", "M", "F", "H", "I", "F", "S", "B", "T", "P", "R", "Q"] ];
var cont=0;    
//creo una tabla e introduzco los valores del vector:   
document.write("<table name='tabla' align='center' border='2'>");		
for (var i=0; i<tablaSopa.length; i++){
  document.write ("<tr>"); 
  for (var j=0; j<16; j++){
      var elementos = document.write("<td class='letrasTabla' align='center'width='30' height='30'><b>   "  + tablaSopa[i][j] + "</b></td>");   
            }
			document.write("</tr>");
		}
	
	document.write("</table>"); 


//creo el vector bidimensional con las soluciones

var soluciones = [ [7,6,"E",3],//ALF
 [1,6,"S",7],//EQUIPOA
 [13,4,"E",7],//MCGYVER
 [8,13,"S",4],//FAMA
 [11,2,"E",11],//FALCONCREST
 [1,5,"E",7],//WEBSTER
 [3,5,"SE",8],//DINASTIA
 [7,1,"N",6]];//MAGNUM

obtenerSolucion();	

//creo un array con la opccion del usuario     
function opcionUsuario(){
    
    return document.getElementById("SolucionUno").value.toUpperCase();    
}

function obtenerSolucion(){

    for(k=0;k<8;k++){
        var long = (soluciones[k][3]);         
        var fila = soluciones[k][0];       
        var columna = soluciones[k][1];        
        var palabra = "";            
        for(i=0;i<(long);i++){ 
            letra = tablaSopa[fila][columna]; 
            palabra += letra;
                      
        var orientacion = soluciones[k][2];          
            switch (orientacion) {
                case "N":
                    fila=  (fila) -1;
                    columna= (columna);
                    break;
                case "S":
                    fila=(fila)+1;
                    columna=(columna);
                    break;
                case "E" :
                    fila=(fila);
                    columna=(columna)+1;
                    break;
                case "O":
                    fila=(fila);
                    columna=(columna)-1;
                    break;
                case "NE":
                     fila=(fila)-1;
                     columna=(columna)+1; 
                    break;
                case "NO": 
                    fila=(fila)-1;
                    columna=(columna)-1;
                    break;
                case "SE":
                     fila=(fila)+1;
                     columna=(columna)+1;
                    break;
                case "SO":
                     fila=(fila)+1;
                     columna=(columna)-1;
                    break;               
            }            
        }
        todasSoluciones[k][0]= palabra;  
    }
     
}
function comparar(){
    
    var i = 0; 
    while ((i< 8) && ( opcionUsuario() != todasSoluciones[ i ][ 0 ]) ) {
        i++;           
    }
        if(i==8){              
            alert("Palabra no encontrada.");
        }else{        
            if(todasSoluciones[i][1]==1){
                alert("Palabra repetida.");
            }else{
                alert("Palabra encontrada.");
                todasSoluciones[i][1]=1;
                cont ++;
                mostrar[i]=opcionUsuario();
				var nombreDelVector = mostrar[i];
				alert(nombreDelVector);
				var cajaNueva = document.createElement("div");
				cajaNueva.setAttribute("class","cajaResultado");
				cajaNueva.setAttribute("id","cajaResultado");
				var pillaNombre = document.createTextNode(nombreDelVector + " ");
                document.getElementById("res").appendChild(cajaNueva);
				document.getElementById("cajaResultado").appendChild(pillaNombre);
                var ponerEnBlanco = document.getElementById("solucionUno");
                ponerEnBlanco.setAttribute("placeholder"," ");
            }
        
    }
   if(cont==8){
       alert("fin");
   }
           
}
/*function presiona(){
	var pulsado = document.getElementById("SolucionUno").onkeypress=comparar();

		
		
	}*/

 

  

 
 


    



 
 


