
const main = () => {
    const form = document.querySelector('form');

    form.addEventListener("submit", submitHandler);
}

const submitHandler = (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    const errors = checkInput(formData);
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.style.display = 'none';
    });
    Object.keys(errors).forEach(error => {
        const errorElement = document.querySelector(`#${error}`);
        console.log("in the Object.keys", errors, error, errorElement)
        errorElement.innerHTML = errors[error];
        errorElement.style.display = 'block';
    })
}

function validateExists (value) {
    return value && value.trim();
}

function checkInput (formData) {
    const errors = {};

    if (!validateExists(formData.get('name'))) {
        errors.name = "Please enter your name!";
    }

    if (!validateExists(formData.get('_replyto'))) {
        errors.email = "Please enter a valid email!";
    }

    if (!validateExists(formData.get('message'))) {
        errors.message = "What? You think I can read minds!? Type something out for me!"
    }
    
    return errors;
}

window.addEventListener("DOMContentLoaded", main);