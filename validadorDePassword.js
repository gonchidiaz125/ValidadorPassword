$(document).ready(function() {

    //Ejecuto esto para que no se muestre si las reglas se cumplen o no se cumplen antes que el usuario ingrese una contraseña
    RequisitosParaPasswordValido();

     $("#btnMostrarPassowrdActual").click(function() {
        HacerVisibleContraseña('contraseñaActual');
     });
     $("#contraseñaNueva").on("input", function(){
        RequisitosParaPasswordValido("contraseñaNueva");
     });
     $("#contraseñaNueva").on("input",function(){
        RepetirNuevaContraseña("contraseñaNueva");
     });
     $("#btnMostrarPasswordNuevo").click(function(){
        HacerVisibleContraseña("contraseñaNueva");
     });
     $("#contraseñaNuevaRepetida").on("input",function(){
        RepetirNuevaContraseña("contraseñaNuevaRepetida");
     });
     $("#btnMostrarContraseñaRepetida").click(function(){
        HacerVisibleContraseña("contraseñaNuevaRepetida");
     });

    function ValidarLargoMinimo(password){
        let largoMinimo = 5;
        if (password.length >= largoMinimo)
        {
            return true;
        }
        return false;
    }
    
    
    function ValidarLargoMaximo(password){
        let largoMaximo = 20;
        if(password.length <= largoMaximo)
        {
            return true;
        }
        return false;
    }
    
    //  la expresión regular "  /^\d$/  " verifica si un carácter es numérico. 
    function ValidarDebeContenerAlgunNumero(password){
        for(var i = 0; i < password.length; i++){
            if(/^\d$/.test(password[i])){
                return true;
            }    
        }
        return false;
    }
    
    function ValidarDebeContenerAlgunaMinuscula(password){
        for(var i = 0; i < password.length; i++)
        {
            if(/^[a-z]$/.test(password[i])){
                return true;
            }
        }
        return false;
    }
    
    function ValidarDebeContenerAlgunaMayuscula(password){
        for(var i = 0; i < password.length; i++)
        {
            if(/^[A-Z]$/.test(password[i]))
            {
                return true;
            }
        }
        return false;
    }
    
    
    // la expresión regular "  /^[^\w\d]$/  " verifica si un carácter no es alfanumérico
    function ValidarDebeContenerAlgunCaracterEspecial(password){
        for(var i = 0; i < password.length; i++)
        {
            if(/^[^\w\d]$/.test(password[i]))
            {
                return true;
            }
        }
        return false;
    }
    
    function RequisitosParaPasswordValido() {
         
        var password = document.getElementById("contraseñaNueva").value;
        if(password === ""){
            $("#faltaReglaCaracterLongMin").hide();
            $("#okReglaCaracterLongMin").hide();
            $("#faltaReglaCaracterLongMax").hide();
            $("#okReglaCaracterLongMax").hide();
            $("#faltaReglaCaracterNumerico").hide();
            $("#okReglaCaracterNumerico").hide();
            $("#faltaReglaCaracterMinuscula").hide();
            $("#okReglaCaracterMinuscula").hide();
            $("#faltaReglaCaracterMayuscula").hide();
            $("#okReglaCaracterMayuscula").hide();
            $("#faltaReglaCaracterEspecial").hide();
            $("#okReglaCaracterEspecial").hide();

            return;
        }
        
        if  (ValidarLargoMinimo(password)) {
            $("#okReglaCaracterLongMin").show();
            $("#faltaReglaCaracterLongMin").hide();
        } else {
            $("#faltaReglaCaracterLongMin").show();
            $("#okReglaCaracterLongMin").hide()
        }
    
        if  (ValidarLargoMaximo(password)){ 
            $("#okReglaCaracterLongMax").show();
            $("#faltaReglaCaracterLongMax").hide();
        } else {
            $("#faltaReglaCaracterLongMax").show();
            $("#okReglaCaracterLongMax").hide();
        }
        
        if  (ValidarDebeContenerAlgunNumero(password)) {
            $("#okReglaCaracterNumerico").show();
            $("#faltaReglaCaracterNumerico").hide();
        } else {
            $("#faltaReglaCaracterNumerico").show();
            $("#okReglaCaracterNumerico").hide();
        }
        
        if  (ValidarDebeContenerAlgunaMinuscula(password)) {
            $("#okReglaCaracterMinuscula").show();
            $("#faltaReglaCaracterMinuscula").hide();
        } else {
            $("#faltaReglaCaracterMinuscula").show();
            $("#okReglaCaracterMinuscula").hide();
        }
        
        if  (ValidarDebeContenerAlgunaMayuscula(password)) {
            $("#okReglaCaracterMayuscula").show();
            $("#faltaReglaCaracterMayuscula").hide();
        } else {
            $("#faltaReglaCaracterMayuscula").show();
            $("#okReglaCaracterMayuscula").hide();
        }
        
        if  (ValidarDebeContenerAlgunCaracterEspecial(password)) {
            $("#okReglaCaracterEspecial").show();
            $("#faltaReglaCaracterEspecial").hide();
        } else {
            $("#faltaReglaCaracterEspecial").show();
            $("#okReglaCaracterEspecial").hide();
        }
        
    }
    
    function RepetirNuevaContraseña(){
        var passwordNuevo = document.getElementById("contraseñaNueva").value;
        var passwordNuevoRepetido = document.getElementById("contraseñaNuevaRepetida").value;
    
        if (passwordNuevo === passwordNuevoRepetido)
        {
            document.getElementById("lasContraseñasCoinciden").innerHTML = "";
        }else
        {
            document.getElementById("lasContraseñasCoinciden").innerHTML = "Las nuevas contraseñas no coinciden";
        }
        if(passwordNuevo === "" && passwordNuevoRepetido === ""){
            document.getElementById("lasContraseñasCoinciden").innerHTML = " ";
        }
    
    }

    function HacerVisibleContraseña(idInputContraseña){
        var passwordInput = document.getElementById(idInputContraseña);
    
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
          } else {
            passwordInput.type = 'password';
          }
    }    

}); 

