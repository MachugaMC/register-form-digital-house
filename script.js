const submit = (event) => {
    if (!validarForm()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        confirm(
            'Datos enviados: \n'+
            `Name: ${document.getElementById('name').value} \n`+
            `Lastname: ${document.getElementById('lastname').value} \n`+
            `Document: ${document.getElementById('document').value} \n`+
            `Email: ${document.getElementById('email').value} \n`+
            `Age: ${document.getElementById('age').value} \n`+
            `Activity: ${document.getElementById('activity').value} \n`+
            `Study Level: ${document.getElementById('studyLevel').value.toUpperCase()} \n`
        )
    }
//   event.preventDefault(); //que se prevenga la actualizacion de la pag
//   const valid = validarForm(); //esto sera true o false segun sea valido o no el form
};

document.getElementById("formulario").addEventListener("submit", submit); //escucha el envio del formulario

//esto valida los campos de texto
const validarForm = () => {
  const camposTexto = document.querySelectorAll('input[type="text"]'); //selecciono todos los inputs text (nombre, apellid, documento)

  let correctValidation = true;

  camposTexto.forEach((campo) => {
    //                                        #error + var.id(name,lastname,etc).primerCaracter.lashaceMayus + .error + id con la primera en mayuscula
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    );
    if (campo.value.length == "") {
      showError(errorCampo, "Required👆");
      correctValidation = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      showError(errorCampo, "At least 3 characters");
    } else {
      hideError(errorCampo);
    }
  });

  //esto valida el campo email
  const email = document.getElementById("email");
  const errorMail = document.getElementById("errorEmail");
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    //este regex valida que el formato del mail sea valido
    hideError(errorMail);
  } else {
    showError(errorMail, "Invalid mail.🗿");
    correctValidation = false;
  }

  //validacion de edad
  const edad = document.getElementById("age");
  const errorAge = document.getElementById("errorAge");
  if (edad.value >= 18) {
    hideError(errorAge);
  } else {
    showError(errorAge, "You must have legal age. 🗿🗿");
  }

  //validacion de la actividad

  const actividad = document.getElementById('activity');
  const errorActivity = document.getElementById('errorActivity')
  if (actividad.value == '')  {
    showError(errorActivity, 'Select activity.🗿')
    correctValidation = false;
  } else {
    hideError(errorActivity);
  }

  //validacion estudio
  const studyLevel = document.getElementById('studyLevel');
  const errorStudyLevel = document.getElementById('errorStudyLevel');
  if (studyLevel.value == '') {
    showError(errorStudyLevel, 'Select an study level🗿')
    correctValidation = false;
  } else {
    hideError(errorStudyLevel)
  }

  //validar los terminos y condiciones
  const termsConditions = document.getElementById('termsConditions');
  const errorTermsConditions = document.getElementById('errorTermsConditions')
  if (!termsConditions.checked) {
    showError(errorTermsConditions, 'Must agree.🗿')
    correctValidation = false;
  } else {
    hideError(errorTermsConditions)
  }

  return correctValidation; //esto dira si el formulario completo es o no valido
};

const showError = (element, message) => {
  element.textContent = message;

  element.style.display = "block";
};
const hideError = (element) => {
  element.textContent = "";

  element.style.display = "none";
};
