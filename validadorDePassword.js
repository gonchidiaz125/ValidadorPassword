$(document).ready(function() {


    // onclick="HacerVisibleContraseña('contraseñaActual')"
    // $("#btnMostrarPassowrdActual").click(HacerVisibleContraseña('contraseñaActual'));

     $("#btnMostrarPassowrdActual").click(function() {
        HacerVisibleContraseña('contraseñaActual');
     });

     $("#contraseñaNueva").on("input", function(){
        EstoSeEjecutaCuandoPulsoUnaTeclaEnPassword("contraseñaNueva");
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
    
    function EstoSeEjecutaCuandoPulsoUnaTeclaEnPassword() {
         
        var password = document.getElementById("contraseñaNueva").value;
    
        if  (ValidarLargoMinimo(password)) {
            document.getElementById("reglaCaracterLongMin").innerHTML = "okReglaCaracterLongMin";
            // muestro "OK: "
        } else {
            document.getElementById("reglaCaracterLongMin").innerHTML = "faltaReglaCaracterLongMin";
            // muestro "Falta: "
        }
    
        if  (ValidarLargoMaximo(password)){ 
             document.getElementById("reglaCaracterLongMax").innerHTML = "okReglaCaracterLongMax";
            // muestro "OK: "
        } else {
            document.getElementById("reglaCaracterLongMax").innerHTML = "faltaReglaCaracterLongMax";
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunNumero(password)) {
            document.getElementById("reglaCaracterNumerico").innerHTML = "okReglaCaracterNumerico";
            // muestro "OK: "
        } else {
            document.getElementById("reglaCaracterNumerico").innerHTML = "faltaReglaCaracterNumerico";
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunaMinuscula(password)) {
            document.getElementById("reglaCaracterMinuscula").innerHTML = "okReglaCaracterMinuscula";
            // muestro "OK: "
        } else {
            document.getElementById("reglaCaracterMinuscula").innerHTML = "faltaReglaCaracterMinuscula";
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunaMayuscula(password)) {
            document.getElementById("reglaCaracterMayuscula").innerHTML = "okReglaCaracterMayuscula";
            // muestro "OK: "
        } else {
            document.getElementById("reglaCaracterMayuscula").innerHTML = "faltaReglaCaracterMayuscula";
            // muestro "Falta: "
        }
        
        if  (ValidarDebeContenerAlgunCaracterEspecial(password)) {
            document.getElementById("reglaCaracterEspecial").innerHTML = "okReglaCaracterEspecial ";
            // muestro "OK: "
        } else {
             document.getElementById("reglaCaracterEspecial").innerHTML = "faltaReglaCaracterEspecial";
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

