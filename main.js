const form = document.querySelector('form')
const input = document.querySelector('input')
const errorText = document.querySelector(".error-text");
const forming = document.querySelector(".forming");
const content = document.querySelector(".content");
const email = document.querySelector(".email");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!input.value) {
        form.classList.add('error')
    }   else {
        content.classList.add('hide')
        forming.classList.remove('hide')
        email.textContent = input.value
    }
})