 

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

function ValidarDebeContenerAlgunNumero(){
    for(var i = 0; i < password.length; i++){
        if(isNaN(parseInt(password[i]))){
            return true;
        }
        return false;
    }
}

function ValidarDebeContenerAlgunaMinuscula(){
    for(var i = 0; i < password.length; i++)
    {
        if(/^[a-z]$/.test(password[i])){
            return true;
        }
    }
    return false;
}

function ValidarDebeContenerAlgunaMayuscula(){
    for(var i = 0; i < password.length; i++)
    {
        if(/^[A-Z]$/.test(password[i]))
        {
            return true;
        }
    }
    return false;
}

