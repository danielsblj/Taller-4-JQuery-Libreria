window.onload = () => {
  const form = $("#inscription-form");

  $().ready(() => {
    if (form.length) {
     form.validate({
       rules: {
   
         documento: {
           required: true,
         },
         identification: {
           required: true,
         },
         nombre: {
           required: true,
           minlength: 3,
           maxlength: 40,
         },
         lastName: {
           required: true,
           minlength: 3,
           maxlength: 40,
         },
         correo: {
           required: true,
           email: true,
         },
         profesion: {
           required: true,
           maxlength: 75,
         },
         perfil: {
           required: true,
           maxlength: 250,
         },
       },
       messages: {
   
         documento: {
           required: "El tipo de documento es requerido",
         },
         identification: {
           required: "El numero de documento es requerido",
         },
         nombre: {
           required: "El nombre es requerido y debe tener entre 2 y 40 caracteres",
         },
         lastName: {
           required: "El apellido es requerido y debe tener entre 2 y 40 caracteres",
         },
         correo: {
           required: "El correo es requerido y debe ser un correo valido",
         },
         profesion: {
           required: "La profesión es requerida y no debe superar los 75 caracteres",
         },
         perfil: {
           required: "El perfil es requerido y no debe superar los 250 caracteres",
         },
       },
     });
  }
})
}

function validateMyCode() {
  let hayUnError = false;
  var male = $('#masculino')[0];
    var female = $('#femenino')[0];
    if(genderValidation(male, female,
      'genderError'
    )) {
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
              `El campo experecienas es requerido `;
    } else {
      experiencias.classList.remove('is-invalid');
    }

    if(!hayUnError) {
      imprimirDatos();
    }
}
$("#inscription-form").submit(function (event) {
  event.preventDefault();
  validateMyCode();
}
);

function validarHobbie() {
  const hobbies = $('.hobbieCB');
  for (const hobbie of hobbies) {
    if(hobbie.checked) {
      return true;
    }
  }
  return false;
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

function getGenero () {
  if($('#masculino')[0].checked) {
    return 'Masculino';
  } else {
    return 'Femenino';
  }
}

const experienciasCheckBox = $('#tieneExperiencia')[0];
experienciasCheckBox.addEventListener('change', function visibilidad (event) {
  const contenedorExp = $('#contenedorExperiencias')[0];
  if(event.target.checked) {
    contenedorExp.classList.remove('invisible');
  } else {
    contenedorExp.classList.add('invisible');
  }
})

const imprimirDatos = () => {
  $('#inscription-form')[0].classList.add('invisible');
  $('#cardInformacion')[0].classList.remove('invisible');
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