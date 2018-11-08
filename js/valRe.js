function ValReg() {
  /* DEE¿CLARACION DE VARIABLES*/
  var email1, email2, pass1, pass2;
  /*SE OBTIENEN EL VALIR DE LAS VARIABLES*/ 
  email1 = document.getElementById("email").value.trim;
  email2 = document.getElementById("emailr").value.trim;
  pass1 = document.getElementById("passcd").value.trim;
  pass2 = document.getElementById("passcd2").value.trim;

/*VALIDACION DE CAMPOS VACIOS */
  if (email1 == "") {
    alert("EL CAMPO EMAIL ESTA VACIO");
    return false;
  } else if (email2 == "") {
    alert("El CAMPO CONTRASEÑA ESTA VACIO");
    return false;
/*VALIDACION DE QUE LOS CAMPOS SEAN IGUALES*/    
  } else if (email1 != email2) {
    alert("ERROR LOS EMAIL NO SON IGUALES");
  } else if (pass1 == "") {
    alert("El CAMPO CONTRASEÑA ESTA VACIO");
    return false;
  } else if (pass2 == "") {
    alert("El CAMPO CONTRASEÑA ESTA VACIO");
    return false;
    /*VALIDACION DE QUE LA CONTRASEÑA TENGAS MAS DE 8 CARACTERES*/
  } else if (pass.length < 8) {
    alert("LA CONTRASEÑA ES DEMACIADO CORTA ASEGURESE DE QUE TU CONTRASEÑA TENGA MAS DE 8 CARACTERES");
    return false;
  } else if (pass1 != pass2) {
    alert("ERROR LA CONTRASEÑAS NO SON IGUALES");
  }
 /* console.log("ok");*/
  /*document.loginform.submit();*/
}
