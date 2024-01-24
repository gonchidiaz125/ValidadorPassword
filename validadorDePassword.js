$(document).ready(function() {

    //Ejecuto esto para que no se muestre si las reglas se cumplen o no se cumplen antes que el usuario ingrese una contraseña
    RequisitosParaPasswordValido();

    // onclick="HacerVisibleContraseña('contraseñaActual')"
    // $("#btnMostrarPassowrdActual").click(HacerVisibleContraseña('contraseñaActual'));

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
     //$("#").click(function(){
       // ();
     //});

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
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterLongMin").show();
            $("#okReglaCaracterLongMin").hide()
            // muestro "Falta: "
        }
    
        if  (ValidarLargoMaximo(password)){ 
            $("#okReglaCaracterLongMax").show();
            $("#faltaReglaCaracterLongMax").hide();
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterLongMax").show();
            $("#okReglaCaracterLongMax").hide();
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunNumero(password)) {
            $("#okReglaCaracterNumerico").show();
            $("#faltaReglaCaracterNumerico").hide();
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterNumerico").show();
            $("#okReglaCaracterNumerico").hide();
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunaMinuscula(password)) {
            $("#okReglaCaracterMinuscula").show();
            $("#faltaReglaCaracterMinuscula").hide();
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterMinuscula").show();
            $("#okReglaCaracterMinuscula").hide();
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunaMayuscula(password)) {
            $("#okReglaCaracterMayuscula").show();
            $("#faltaReglaCaracterMayuscula").hide();
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterMayuscula").show();
            $("#okReglaCaracterMayuscula").hide();
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunCaracterEspecial(password)) {
            $("#okReglaCaracterEspecial").show();
            $("#faltaReglaCaracterEspecial").hide();
            // muestro "OK: "
        } else {
            $("#faltaReglaCaracterEspecial").show();
            $("#okReglaCaracterEspecial").hide();
            // muestro "Falta: "
        }
        
    }
    
    function RepetirNuevaContraseña(){
        var passwordNuevo = document.getElementById("contraseñaNueva").value;
        var passwordNuevoRepetido = document.getElementById("contraseñaNuevaRepetida").value;
    
        if (passwordNuevo === passwordNuevoRepetido)
        {
            document.getElementById("lasContraseñasCoinciden").innerHTML = "(OK)   ";
        }else
        {
            document.getElementById("lasContraseñasCoinciden").innerHTML = "(FALSE)   ";
        }if(passwordNuevo === "" && passwordNuevoRepetido === ""){
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

