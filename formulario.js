const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkInputs();
});

// Validaciones de los Imputs

function checkInputs() {

    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;


    // Validación del nombre de usuario
    if (usernameValue === "") {
        setErrorFor(username, "El nombre de usuario es obligatorio");
    } else {
        setSuccessFor(username);
    }

    // Validación del email
    if (emailValue === "") {
        setErrorFor(email, "El email es obligatorio");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, ingrese un email válido");

    } else {
        setSuccessFor(email)
    }

    // Validación de la contraseña
    if (passwordValue === "") {
        setErrorFor(password, "La contraseña es obligatoria");
    } else if (passwordValue.length < 6) {
        setErrorFor(password, "La contraseña debe tener como mínimo 6 caracteres");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "La confirmación de la contraseña es obligatoria");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Las contraseñas no coinciden");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    // Acción para el formulario 100% válido
    const formControls = form.querySelectorAll('.form-control');
    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    });

    if (formIsValid) {
        datosEnviados();;
    }


}

function setErrorFor(input, mensajeError) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    // Adicionar el mensaje de error 
    small.innerText = mensajeError;

    // Adicionar la clase de error 
    formControl.className = "form-control error"

}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //   Adicionar la clase de suceso
    formControl.className = "form-control success"
}

// RegExp para validación de email. Retorna true si el email es válido. False si es inválido 
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

const datosEnviados = () => {

    swal("Tus datos fueron enviados con éxito");
}