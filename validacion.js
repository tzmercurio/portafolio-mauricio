const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("formcontacto__form__container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("formcontacto__form__container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}
  
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
];
  
const mensajesDeError = {
  name: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "Nombre no debe contener mas de 50 caracteres"
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "Asunto no debe contener mas de 50 caracteres"
  },
  mensaje: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "Mensaje no debe contener mas de 300 caracteres"
  },
};
  
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
  