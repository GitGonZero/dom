function  crearVentana() { 
	var nuevaVentana  =  window.open("","","toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,height=500,width=500,left=100,top=100");
	//validacion desde html ----->required pattern="[a-zA-Z]" title="introduce solo letras"
	//comprobamos que existe la ventana
	//ya que pueden estar bloqueados los elementos emergentes 
	if (nuevaVentana) {
		// cabecera del documento html de la ventana creada
		nuevaVentana.document.write("<!DOCTYPE html>\n");
		nuevaVentana.document.write("<html>\n");
		nuevaVentana.document.write("   <head>\n");
		nuevaVentana.document.write("     <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">\n");
		nuevaVentana.document.write("     <title>Tarea Dwec03. Nueva ventana</title>\n");
		nuevaVentana.document.write("   </head>\n");

		// cuerpo del documento
		nuevaVentana.document.write("   <body s>\n");
		nuevaVentana.document.write("      <div>\n");
		
		/*
			var sexo = document.getElementById('sexo');
		
			
		
		
		
		}
		var grupoEdad= document.getElementById('').value;
		var pais = document.getElementById('').value;
		var iban = document.getElementById('').value;
		var tipoCuenta = document.getElementById('').value;
		var tipoSucursal = document.getElementById('').value;
		var serviciosContratados = document.getElementById('').value;
		if (nombre.length == 0){
			nuevaVentana.document.write("<p>Has no se permite dejar el campo 'Nombre' en blanco</p>");
		}else{
		nuevaVentana.document.write("<p>El nombre es: " + nombre+ "</P>");
		
		*/
		
		
		

		// validaciones y resultado final de los datos del formulario.
		nuevaVentana.document.write(" <h1> Datos del formulario:  </h1>\n");
		//validacion y escritura en el nuevo documento del nombre
		var nombre = document.getElementById('nombre2').value;
		if (nombre.length == 0){ //comprobamos que el campo nombre no está en blanco
			nuevaVentana.document.write("<p> <font color='#FF0000'> No se permite dejar el campo 'Nombre' en blanco * </font> </p>");
		}else{ //en caso de que haya algo en el campo nombre lo escribo en la nueva ventana.
			nuevaVentana.document.write(" <h3> Nombre : " +nombre+ "  </h3>\n"); 
		}
		//validacion del segundo apellido
		var primerApellido = document.getElementById('primerApellido').value;
		if (primerApellido.length == 0){ //compruebo que no este en blanco
			nuevaVentana.document.write("<p> <font color='#FF0000'>No se permite dejar el campo 'Primer Apellido' en blanco * </font></p>");
		}else{//escribo el apellido en la nueva ventana
			nuevaVentana.document.write(" <h3> Primer Apellido:  " + primerApellido + "</h3>\n");
		}
		//validacion del segundo apellido
		var segundoApellido = document.getElementById('segundoApellido').value;
		//compruebo que no esta en blanco
		if (segundoApellido.length == 0){
			nuevaVentana.document.write("<p> <font color='#FF0000'>No se permite dejar el campo 'Segundo Apellido' en blanco * </font></p>");
		}else{//lo escribo en la nueva página
			nuevaVentana.document.write(" <h3> Segundo Apellido:  " + segundoApellido + "</h3>\n");
		}
		//validacion del sexo
		if(document.form3.hombre.checked){
				nuevaVentana.document.write(" <h3> Sexo: Hombre </h3>\n");
		}else if(document.form3.mujer.checked){
				nuevaVentana.document.write(" <h3> Sexo: Mujer </h3>\n");
		}else{
				nuevaVentana.document.write("<p> <font color='#FF0000'>No se permite dejar el campo 'Sexo' en blanco * </font></p>");
		}
		
		//validacion del grupo de edad
		if(document.form2.menorDe20.checked){
				nuevaVentana.document.write(" <h3> Has nacido después del  año 1994. </h3>\n");
		}else if(document.form2.veinteOtreintaYCinco.checked){
				nuevaVentana.document.write(" <h3> Has nacido entre el año 1994 y el 1979. </h3>\n");
		}else if(document.form2.treintaSeisCincuenta.checked){
				nuevaVentana.document.write(" <h3> Has nacido entre el año 1979 y el 1964. </h3>\n");
		}else if(document.form2.mayorDe50.checked){
				nuevaVentana.document.write(" <h3> Has nacido antes del año 1964. </h3>\n");
		}else{
				nuevaVentana.document.write("<p> <font color='#FF0000'>No se permite dejar el campo 'edad' en blanco * </font></p>");
		}
		//validacion de la nacionalidad
		var pais = document.getElementById('paisDeNacimiento').value;
		if(pais==0){
			nuevaVentana.document.write("<p> <font color='#FF0000'>No se permite dejar el campo 'Pais de Nacimiento' en blanco * </font></p>");
		}
		else if(pais =="España"){
			nuevaVentana.document.write(" <h3> Nacionalidad  española. </h3>\n");
		}else if(pais =="Portugal"){
			nuevaVentana.document.write(" <h3> Nacionalidad  portuguesa. </h3>\n");
		}else if(pais =="Italia"){
			nuevaVentana.document.write(" <h3> Nacionalidad  italiana. </h3>\n");
		}else if(pais =="Francia"){
			nuevaVentana.document.write(" <h3> Nacionalidad  francesa. </h3>\n");
		}else if(pais =="Reino Unido"){
			nuevaVentana.document.write(" <h3> Nacionalidad  inglesa. </h3>\n");
		}else if(pais =="Alemania"){
			nuevaVentana.document.write(" <h3> Nacionalidad  alemana. </h3>\n");
		}else if(pais =="Suiza"){
			nuevaVentana.document.write(" <h3> Tu nacionalidad  suiza. </h3>\n");
		}else if(pais =="Noruega"){
			nuevaVentana.document.write(" <h3> Nacionalidad Noruega. </h3>\n");
		}else if(pais =="Finlandia"){
			nuevaVentana.document.write(" <h3> Nacionalidad  finlandesa. </h3>\n");
		}else if(pais =="Dinamarca"){
			nuevaVentana.document.write(" <h3> Nacionalidad danesa. </h3>\n");
		}else if(pais =="Belgica"){
			nuevaVentana.document.write(" <h3> Nacionalidad belga. </h3>\n");
		}
		
		// validacion del iban 
		
		var iban =  document.getElementById("iban").value;
		var longitudIban = document.getElementById("iban").length;
		if (iban == 0){
			
			nuevaVentana.document.write( document.getElementById("iban").length);
		} if(longitudIban != 24){
			nuevaVentana.document.write("<p> <font color='#FF0000'>Numero de digitos de  iban incorrectos.Introduce 24 caracteres </font></p>");		
		}else{
			nuevaVentana.document.write("<p> Iban numero: " + iban +" </p>");	
		}
		
		//listado de servicios contratados
		nuevaVentana.document.write(" <h3>Interesado en los siguientes temas:  </h3>\n");
		if (document.getElementById('otrosTemas_0').checked){
	
			nuevaVentana.document.write(" <div> <table> <tr><td>libros</td> ");
		}
		if (document.getElementById('otrosTemas_1').checked){
			nuevaVentana.document.write(" <td>Viajes</td> ");
		}
		if (document.getElementById('otrosTemas_2').checked){
			nuevaVentana.document.write("  <td>Informatica</td></tr> ");
		}
		if (document.getElementById('otrosTemas_2').checked){
			nuevaVentana.document.write("<tr><td>Cursos</td> ");
		}
		if (document.getElementById('otrosTemas_4').checked){
			nuevaVentana.document.write(" <td>Seguros</td> ");
		}
		if (document.getElementById('otrosTemas_5').checked){
			nuevaVentana.document.write(" <td>Musica</td></tr> ");
		}
		if (document.getElementById('otrosTemas_6').checked){
			nuevaVentana.document.write("<tr><td>Apuestas</td> ");
		}
		if (document.getElementById('otrosTemas_7').checked){
			nuevaVentana.document.write("<td>Idiomas</td> ");
		}
		if (document.getElementById('otrosTemas_8').checked){
			nuevaVentana.document.write("<td>Empleos</td></tr></table></div> ");
		}
		
	
		

		
		
		
		nuevaVentana.document.write(" <p> <a href = 'index.html'><h3> Pincha aqui para volver <h3> </a>" );	
		nuevaVentana.document.write("      </div>\n");
		nuevaVentana.document.write("   </body>\n");
		nuevaVentana.document.write("</html>");
	} else {
		alert("Revisa si tienes bloqueados los pop-ups o ventanas emergentes");
	}
  
	
}