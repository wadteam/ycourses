function ValLog() {
/*DECLARACION DE VARIABLES */
  var user, pass;
/*RESCATO DE VARIABLES*/
  user = document.getElementById("usercd").value;
  pass = document.getElementById("passcd").value;
/* VALIDACION DE CAMPOS VACIOS*/
  if (user === "") {
    alert("EL CAMPO EMAIL ESTA VACIO");
    return false;
  } else if (pass==="") {
    alert("El CAMPO CONTRASEÑA ESTA VACIO");
    return false;
  } else if(pass.length<8||pass.length>20){
    alert("ERROR EN LA CONTRASEÑA INGRESADA")
    return false;
  }
  console.log("ok");
  document.loginform.submit();
}
