# Validación de Password (Front-end)
El objetivo de este proyecto es demostrar algunos de mis conocimientos como desarrollador Front-end. 
Como ejemplo propuse una página para cambio de contraseña de un usuario, donde se validará que la nueva contraseña cumpla con varias reglas para asegurar de que sea una contraseña segura. Puede ver este [ejemplo funcionando aquí](https://gonzalodiaz-validadordepassword.netlify.app/index.html).

## Tecnologías utilizadas
- **Front-end:** HTML, CSS, Javascript, jQuery, Font awesome, Sweet Alert
- **Back-end:** version C# [(ver código aquí)](https://github.com/gonchidiaz125/ValidadorDePasswordNet) y versión Node js [(ver código aquí)](https://github.com/gonchidiaz125/ValidadorDePasswordNodeJs)

## Descripción de la funcionalidad
Cuando el usuario ingresa una nueva contraseña la aplicación validará automáticamente que cumpla con las siguientes reglas:
- Longitud mínima
- Longitud máxima
- Contener al menos una mayúscula
- Contener al menos una minúscula
- Contener al menos un caracter numérico
- Contener al menos un caracter especial

## Las validaciones se realizarán en:
- **Front-end:** cada vez que el usuario ingresa un caracter se ejecutarán las validaciones solo en el front-end para asegurar una buena experiencia de usuario evitando la lentitud del acceso a backend
- **Back-end:** cuando el usuario pulsa el botón "Confirmar contraseña" se llamará una endpoint de una API para validar todo del lado del back-end, lo cual garantiza la seguridad de la validación (*) (**)

(*) La validación de back-end está temporalmente deshabilitada ya que tuve que retirar la API publicada en Azure. Cuando pueda publicarla en otro proveedor voy a restablecer esta comunicación.
(**) La validación de back-end utiliza una API, de la cual la tengo desarrollado en dos versiones (C# & .NET y Node js)


## Como ver este ejemplo en funcionamiento:
- No hace falta clonar el repositorio. 
- Simplemente podemos ver la [aplicación funcionando aquí](https://gonzalodiaz-validadordepassword.netlify.app/index.html)

