(
  HTML (Hyper text module Language) => Maquetar. DOM Document object model 
  CSS (cascade Style sheet) => estilar => poner las cosas bonitas. (RESPONSIVE => responsivas) - MEDIA QUERIES (Avanzados) Diseño Web
  pseudo-clasess de CSS
  JS - DOM  Es la manera en que JS se comunica con HTML y con CSS
)

FRONT - END
NodeJS ( dato curioso )

JS => ES6 ( ecma script 6 ).  ES5

GIT


Usando HTML, CSS y Javascript generar una pagina web donde se visualice un formulario con los siguientes campos:
    • Tipo de documento (Campo de tipo Select, Requerido) con las siguientes opciones
        ◦ Valor: 1,  Texto: Cedula de ciudadanía
        ◦ Valor: 2, Texto: Documento de identidad   YA ESTA 
    • Numero de documento (Campo de tipo Text, Requerido)   YA ESTA 
    • Nombres (Campo de tipo Text, Requerido, mínimo 3 caracteres, máximo 40)  
    • Apellidos (Campo de tipo Text, Requerido, mínimo 3 caracteres, máximo 40)
    • Correo (Campo de tipo Text, Requerido, Se debe validar que efectivamente sea un correo valido) // Reg-ex
    • Genero (Campo de tipo Radio, Requerido) con las opciones
        ◦ Valor: M, Texto: Masculino
        ◦ Valor: F, Texto: Femenino YA ESTA
    • Profesión (Campo de tipo Text, Requerido, máximo 75 caracteres)
    • Perfil (Campo de tipo Textarea, Requerido, máximo 250 caracteres)
    • Hobies (Campos de tipo checkbox, debe escoger por lo menos una opción) con las siguientes opciones:
        ◦ Valor: caminar, Texto: Caminar
        ◦ Valor: ejercicio, Texto: Ejercicio
        ◦ Valor: ciclismo, Texto: Ciclismo
        ◦ Valor: futbol, Texto: Futbol
        ◦ Valor: tejo, Texto: Tejo
    • ¿Tiene experiencias laborales? (Campo de tipo checkbox)
        ◦ Si chulea esta casilla debe aparecer un campo extra de tipo textarea donde escriba las experiencias laborales que ha tenido. Este campo se vuelve obligatorio cuando aparece.
    • El formulario debe tener 2 botones, uno para enviar el formulario y otro para Limpiar el formulario

    Usar libreria Bootstrap ( Css y con HTML )

// JS Es un lenguaje de tiipado dinamico => 

  let myVar = 4;
  console.log(myVar+8) // 12
  myVar= "Mi perro"
  myVar = myVar.concact(' es muy lindo')) // Mi perro es muy lindo
  MyVar = true

A difereencia de Java.

Se inventaron algo que se llama TypeScript ( javascript con tipos )

// Tipos de variables (var, let, const) ( clase avanzada saber que es hoisting )
// logger ( console.log() )
// como se crean botones ( formulario )


Estructuras de datos: 
[1,2,3,4,5]

Tree ( arboles )

Averiguar lo que es un Callback;
averiguar que es un listener!
### HTML
https://developer.mozilla.org/es/docs/Web/HTML
La estructura es un arbol.
Accesibilidad ( SCREEN READERS )
HTML semantico ( SEMANTICA ) => https://es.wikipedia.org/wiki/HTML_sem%C3%A1ntico

<section>
  <article>
    <div>
      .....
casi todo tag debe abrirse y cerrarse entre /Mayor y menor <>
Ejemplo 
<form>

  .....
  <input/>...
  ...
</form>

Hay tags que se pueden cerrar en el mismo tag que los abres 

   <input id="ageInput" class="" type="password"/>

Hay tags que no que se pueden cerrar en el mismo tag que los abres 

<div>

</div>

# CSS
Curso Css3: https://www.youtube.com/watch?v=5YiU9dgB6ZQ&list=PL238466B2A9FE0BAD
Curso basico Html5 : Codigo facilito ( Formularios )
Sass Less ( preprocesadores )
Selectores {
    id
    class
    element => body div p input {
        display: none;
    }
} => creo que son 5 tipos;

reglas de especificidad: id >> class >> element >> ....


#### Javascript JS

Aplicaciones single web application.

API  application programming interface - Puente de comunicacion entre HTML y JS (DOM)
Es decir es la manera en que JS puede tener control de los elementos HTML

Eso nos permite desde JS tener ciertos objetos o metodos.

Objeto: window {
    ...Un monton de cosas,
    document {
        Listeners ( escuchadores ) => estar pendientes de cuando el usuario hacer algo en la aplicacion y lanzar ( triggers ) o funciones que ejecuten cosas : {
            Metodos: addEventListener('onkeypress')
        },
        metodos: {
            
        }
    }
}

global => nodeJs



stackTrace (stack => pila)