const input = document.getElementById("email");
const form = document.querySelector("form");
const errorText = document.querySelector(".error__text");
const inputEmail = document.querySelector(".input__email");
const container1 = document.querySelector('.container')
const container2 = document.querySelector('.container2')
const successBtn = document.querySelector('.success__btn')

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const checkForm = (e) => {
    e.preventDefault();
    const email = input.value;
    if (!validateEmail(email)) {
        form.classList.add("error");
        errorText.style.display = 'flex'

    } else {
        form.classList.remove("error");
        errorText.style.display = 'none'
        inputEmail.textContent = email
        container1.classList.add('hidden')
        container2.classList.remove('hidden')
    }
};

const goBack = () => {
    container1.classList.remove('hidden')
    container2.classList.add('hidden')
    input.value = ''
}

form.addEventListener("submit", checkForm);
successBtn.addEventListener('click', goBack)
