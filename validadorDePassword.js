$(document).ready(function() {

    //Ejecuto esto para que no se muestre si las reglas se cumplen o no se cumplen antes que el usuario ingrese una contraseña
    RequisitosParaPasswordValido();

    $("#btnContinuar").click(function() {
        ValidarNuevoPasswordContraBackend();
    });

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
        
        let res = ValidarLargoMinimo(password);
        ActualizarResultadoLargoMinimo(res);

        res = ValidarLargoMaximo(password);
        ActualizarResultadoLargoMaximo(res);

        res = ValidarDebeContenerAlgunNumero(password);
        ActualizarResultadoContenerCaracterNumerico(res);

        res = ValidarDebeContenerAlgunaMinuscula(password);
        ActualizarResultadoContenerAlgunaMinuscula(res);

        res = ValidarDebeContenerAlgunaMayuscula(password);
        ActualizarResultadoContenerAlgunaMayuscula(res);

        res = ValidarDebeContenerAlgunCaracterEspecial(password);
        ActualizarResultadoContenerAlgunCaracterEspecial(res);
        
    }

    function ActualizarResultadoLargoMinimo(resultado)
    {
        if  (resultado) {
            $("#okReglaCaracterLongMin").show();
            $("#faltaReglaCaracterLongMin").hide();
        } else {
            $("#faltaReglaCaracterLongMin").show();
            $("#okReglaCaracterLongMin").hide()
        }
    
      
    }

    function ActualizarResultadoLargoMaximo(resultado)
    {        
        
        if  (resultado){ 
            $("#okReglaCaracterLongMax").show();
            $("#faltaReglaCaracterLongMax").hide();
        } else {
            $("#faltaReglaCaracterLongMax").show();
            $("#okReglaCaracterLongMax").hide();
        }
    }

    function ActualizarResultadoContenerCaracterNumerico(resultado)
    {                        
        if  (resultado) {
            $("#okReglaCaracterNumerico").show();
            $("#faltaReglaCaracterNumerico").hide();
        } else {
            $("#faltaReglaCaracterNumerico").show();
            $("#okReglaCaracterNumerico").hide();
        }
    }

    function ActualizarResultadoContenerAlgunaMinuscula(resultado)
    {                                        
        if (resultado) {
            $("#okReglaCaracterMinuscula").show();
            $("#faltaReglaCaracterMinuscula").hide();
        } else {
            $("#faltaReglaCaracterMinuscula").show();
            $("#okReglaCaracterMinuscula").hide();
        }
    }

    function ActualizarResultadoContenerAlgunaMayuscula(resultado)
    {                                                
        if (resultado) {
            $("#okReglaCaracterMayuscula").show();
            $("#faltaReglaCaracterMayuscula").hide();
        } else {
            $("#faltaReglaCaracterMayuscula").show();
            $("#okReglaCaracterMayuscula").hide();
        }
    }

    function ActualizarResultadoContenerAlgunCaracterEspecial(resultado)
    {                                                                
        if (resultado) {
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

    function ValidarNuevoPasswordContraBackend() {        
        let isLocalHost = window.location.href.includes("127.0.0.1")
        let endpointUrl;

        if (isLocalHost) {
            endpointUrl ="http://localhost:5212/Password";
        } else {
            endpointUrl = "https://validadordepasswordwebapi.azurewebsites.net/Password";
        }

        // URL del endpoint y parámetro
        //const endpointUrl = "http://localhost:5212/Password";
        const nuevoPassword = $("#contraseñaNueva").val();

        // Invocar el endpoint utilizando fetch
        fetch(`${endpointUrl}?password=${nuevoPassword}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta del servidor (data)
            //console.log(data);
            actualizarReglasValidasDesdeBackend(data);
        })
        .catch(error => {
            // Manejar errores
            console.error("Error al realizar la solicitud:", error);
        });

    }

    function actualizarReglasValidasDesdeBackend(resultadoValidacion) {
        let reglas = resultadoValidacion.reglas;

        // for para recorrer cada regla        
        for (var i=0; i< reglas.length; i++)
        {
            // dentro del for, dependiendo del numero de regla, voy a mostra u ocultar los tildes verdes y cruces rojas
            regla = reglas[i];

            switch (regla.numeroRegla)
            {
                case 0:
                    ActualizarResultadoLargoMinimo(regla.valida);
                    break;

                case 1:
                    ActualizarResultadoLargoMaximo(regla.valida);
                    break;
                    
                case 2:
                    ActualizarResultadoContenerCaracterNumerico(regla.valida);
                    break;

                case 3:
                    ActualizarResultadoContenerAlgunaMinuscula(regla.valida);
                    break;

                case 4:
                    ActualizarResultadoContenerAlgunaMayuscula(regla.valida);
                    break;

                case 5:
                    ActualizarResultadoContenerAlgunCaracterEspecial(regla.valida);
                    break;
            }            
        }    

    }
        

}); 

