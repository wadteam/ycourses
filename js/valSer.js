/*creacion de la funcion */
function validarSer(){
    /*Declaracion de las variables */
    var inputNombre, inputApellidos, inputEmail, inputCompany, inputTel1
  /*Se rescatan las variables  */
    Nombre = document.getElementById("inputNombre").value;
    Apellido = document.getElementById("inputApellido").value;
    Email = document.getElementById("inputEmail").value;
    Company = document.getElementById("inputCompany").value;
    Tel1 = document.getElementById("InputTel1").value;
    /*VALIDACION DE CAMPOS */
    if (Nombre =="" ){
        alert("EL CAMPO NOMBRE ESTA VACIO")
        return false ;
    }else if(Apellido =="") {
        alert("El CAMPPO APELLIDO ESTA VACIO")
        return false ;
    
    }else if(Email==""){
        alert("EL CAMPO EMAIL ESTA VACIO")
        return false ;
    
    }else if(Company=="") {
        alert("EL CAMPO COMPAÑIA ESTA VACIO")
        return false ;
    
    }else if(Tel1==""){
        alert("EL CAMPO TELEFONO 1 ESTA VACIO")
        return false ;
    
    }
    
    }