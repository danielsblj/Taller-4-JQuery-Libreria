function campoVacio(element, divError) {
  if(!element.value) {
    element.classList.add('is-invalid');
    $(`#${divError}`)[0].innerHTML = 
          `El campo de ${element.name} es requerido.`;
    return true;
  } else {
    element.classList.remove('is-invalid');
    return false;
  }
}

function genderValidation(masculino, femenino, divError) {
  const container = $(`#${divError}`)[0]
  if(!masculino.checked && !femenino.checked) {
     container.classList.add('is-invalid');
     container.classList.remove('hidden');
     return true;
  } else {
    container.classList.remove('is-invalid');
    container.classList.add('hidden');
    return false;
  }
}

const experienciasCheckBox = $('#tieneExperiencia')[0];
// agrego un listener o escuchador
experienciasCheckBox.addEventListener('change', function visibilidad (event) {
  const contenedorExp = $('#contenedorExperiencias')[0];
  if(event.target.checked) {
    contenedorExp.classList.remove('invisible');
  } else {
    contenedorExp.classList.add('invisible');
  }
})

function getGenero () {
  if($('#masculino')[0].checked) {
    return 'Masculino';
  } else {
    return 'Femenino';
  }
}

function validateStrLenght (input,event,divError) {
    if(input.value.length < 3 || input.value.length > 40) {
      input.classList.add('is-invalid');
        $(`#${divError}`).innerHTML = 
          `El ${input.name} es requerido. Este Debe tener minimo 3 caracteres maximo 40`;
      return true;
    } else {
      input.classList.remove('is-invalid');
      return false;
    }  
}

// esta funcion me imprime los datos 
const imprimirDatos = () => {
  $('#inscription-form')[0].classList.add('invisible');
  $('#cardInformacion')[0].classList.remove('invisible');
    // if ternario, u operacion ternaria o condicion ternaria

    // cammel case primera letra miniscula, a partir de ahi toda palabra que venga con primera letra en mayus
    const tipoDoc = $('#documento')[0].value === '1' ? 'Cedula de Ciudadania' : 'Tarjeta de identidad'
      $('#textoTipoDocumento')[0].innerHTML = 
      `<span> Tipo Documento: ${tipoDoc} </span>`
      $('#textoDocumento')[0].innerHTML = 
      `<span> Documento: ${$('#identification')[0].value} </span>`
      $('#textoNombre')[0].innerHTML = 
      `<span> Nombre: ${$('#name')[0].value} </span>`
      $('#textoApellido')[0].innerHTML = 
      `<span> Apellido: ${$('#lastName')[0].value} </span>`
      $('#textoCorreo')[0].innerHTML = 
      `<span> Correo: ${$('#correo')[0].value} </span>`
      $('#textoGenero')[0].innerHTML = 
      `<span> Genero: ${getGenero()} </span>`
      $('#textoProfesion')[0].innerHTML = 
      `<span> Profesión: ${$('#profesion')[0].value} </span>`
      let hobbiesTexto = '';
      const hobbies = $('.hobbieCB');
      for (const hobbie of hobbies) {
        if(hobbie.checked) {
          hobbiesTexto = ` ${hobbiesTexto} ${hobbie.value} ,`;
        }
      }
      $('#textoHobbie')[0].innerHTML = 
        `<span> Hobbies: ${hobbiesTexto.slice(0, hobbiesTexto.length-1)} </span>`
      $('#textoPerfil')[0].innerHTML = 
        `<span> Perfil: ${$('#perfil')[0].value} </span>`
      if($('#tieneExperiencia')[0].checked) {
        $('#textoExperiencias')[0].innerHTML = 
          `<span> Experiencias: ${$('#experiencias')[0].value} </span>`
      }
}
// propagacion de eventos
function validateMyCode(event) {
  event.preventDefault();
  let hayUnError = false;

  if(campoVacio($('#documento')[0], 'documentoError')){
    hayUnError = true;
  } 
  if(campoVacio($('#identification')[0], 'identificacionError')){
    hayUnError = true;
  }
  campoVacio($('#correo')[0], 'correoError');
  campoVacio($('#profesion')[0], 'profesionError');
  campoVacio($('#perfil')[0], 'perfilError');
  var male = $('#masculino')[0];
  var female = $('#femenino')[0];
  if(genderValidation(male, female,
    'genderError'
  )) {
    hayUnError = true;
  }
  const correo = $('#correo')[0]
  if (validarCorreo(correo)) {
     correo.classList.remove('is-invalid');
  } else {
     hayUnError = true;
     correo.classList.add('is-invalid');
     $('#correoError')[0].innerHTML = 
            `El campo de correo es requerido o esta mal escrito.`;
  }
  if(validateStrLenght($('#name')[0] , event, 'userNameError')){
    hayUnError = true;
  }
  if(validateStrLenght($('#lastName')[0], event, 'userLastNameError')) {
    hayUnError = true;
  }

  const hobbiesError = $('#hobbiesError')[0]; 
  if(validarHobbie()) {
    hobbiesError.classList.remove('is-invalid');
    hobbiesError.classList.add('hidden');
  } else {
    hayUnError = true;
    hobbiesError.classList.add('is-invalid');
    hobbiesError.classList.remove('hidden');
  }

  const tieneExperiencia= $('#tieneExperiencia')[0];
  const experiencias = $('#experiencias')[0];
  if(tieneExperiencia.checked && experiencias.value === '') {
    hayUnError = true;
    experiencias.classList.add('is-invalid');
    $('#experienciaError')[0].innerHTML = 
            `El campo de correo es requerido o esta mal escrito.`;
  } else {
     experiencias.classList.remove('is-invalid');
  }

  if(!hayUnError) {
    imprimirDatos();
  }
}

 // arrow function o funcion flecha
const validarCorreo = (correo) => {
  var expReg = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  return expReg.test(correo.value);
}

function validarHobbie() {
  const hobbies = $('.hobbieCB');
  for (const hobbie of hobbies) {
    if(hobbie.checked) {
      return true;
    }
  }
  return false;
}
// buscar que es un callback