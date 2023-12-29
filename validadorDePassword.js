 

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


