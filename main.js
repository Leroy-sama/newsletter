const form = document.querySelector('form');
const content = document.querySelector('.content');
const forming = document.querySelector('.forming');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    content.classList.add('hide');
    forming.classList.remove('hide');
});