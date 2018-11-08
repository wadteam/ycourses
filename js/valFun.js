function validarFun() {
  /*DECLARACION DE VARIABLES*/
  var inputNombre, inputApellidos, inputEmail, inputCompany, inputTel1;
  /*SE RESCATAN LAS VARIABLES */
  Nombre = document.getElementById("inputNombre").value;
  Apellido = document.getElementById("inputApellido").value;
  Email = document.getElementById("inputEmail").value;
  Company = document.getElementById("inputCompany").value;
  Tel1 = document.getElementById("inputTel1").value;
  /*VALIDACION DE CAMPOS */
  if (Nombre == "") {
    alert("EL CAMPO NOMBRE ESTA VACIO");
    return false;
    /*VALIDACION DE CANTIDAD DE CARACTERES */
  } else if (Nombre.lenght < 41) {
    alert("EL MAXIMO DE CARACTERES SON 41");
    return false;
  } else if (Apellido == "") {
    alert("El CAMPPO APELLIDO ESTA VACIO");
    return false;
    /*Validacion de cantidad de caracteres */
  } else if (Apellido.legnth < 41) {
    alert("EL MAXIMO DE CARACTERES SON 41");
    return false;
  } else if (Email == "") {
    alert("EL CAMPO EMAIL ESTA VACIO");
    return false;
  } else if (Company == "") {
    alert("EL CAMPO COMPAÑIA ESTA VACIO");
    return false;
  } else if (Tel1 == "") {
    alert("EL CAMPO TELEFONO 1 ESTA VACIO");
    return false;
    /*validacion de cantidad de caracteres y aceptacion del + */
  } else if (Tel1 == null || Tel1.legnth == 0 || /^\s+$/.test(Tel1)||Tel1.length) {
      alert ("CAMPO TELEFONO MAL INGRESADO");
    return false;
  }
}
