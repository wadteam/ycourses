/*$("body").on("click","#btn",*/ function valClie() {
  /*DECLARACION DE VARIABLES */
  var inputNombre, inputApellidos, inputEmail, inputCompany, inputTel1;
  /*SE RESCATAN LAS VARIABLES A UTILIZAR*/

  Nombre = document.getElementById("inputNombre").value;
  Apellido = document.getElementById("inputApellido").value;
  Email = document.getElementById("inputEmail").value;
  Company = document.getElementById("inputCompany").value;
  Tel1 = document.getElementById("InputTel1").value;
  /*VALIDACIONES */
  if (Nombre == "") {
    alert("EL CAMPO NOMBRE ESTA VACIO");
    return false;
    /*VALIDACION DE LONGITUD DE NOMBRE */
  } else if (nombre.length > 41) {
    alert("El NOMBRE ES MUY LARGO");
    return false;
  } else if (Apellido == "") {
    alert("El CAMPPO APELLIDO ESTA VACIO");
    return false;
    /*VALIDACION DE LONGITUD DE APELLIDO */
  } else if (Apellido.length > 41) {
    alert("El NOMBRE ES MUY LARGO");
    return false;
  } else if (Email == "") {
    alert("EL CAMPO EMAIL ESTA VACIO");
    return false;
  } else if (Company == "") {
    alert("EL CAMPO COMPAÑIA ESTA VACIO");
    return false;
    /* VALIDACION DE LONGITUD DEL CAMPO COMPAÑIA */
  } else if (Company.length > 30) {
    alert("El NOMBRE ES MUY LARGO");
    return false;
  } else if (Tel1 == "") {
    alert("EL CAMPO TELEFONO 1 ESTA VACIO");
    return false;
    /*VALIDACION DE LONGITUD DEL CAMPO TELEFONO */
    /*segundo campo telefono no se valida por que no necesario */
  } else if (Tel1.length > 9) {
    alert("El NOMBRE ES MUY LARGO");
    return false;
  } else if (
    Tel1 == null ||
    Tel1.legnth == 0 ||
    /^\s+$/.test(Tel1) ||
    Tel1.length
  ) {
    alert("CAMPO TELEFONO MAL INGRESADO");
    return false;
  }
}

/*
filtro de las letras
var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
---------------if ---------------------------------
if (filter6.test(document.getElementById("EL_ID_DEL_CAMPO"))){
alert("Es puro texto")
}
else{
alert("No es texto")
}
----------------------------------------------------------------
--------------------------otro tipo de validacion  de texto
  else if(document.form.nombre.value.match(/[a-z]/){
     alert('Solo letras por favor');
     document.form.nombre.focus();
     return false;
}*/