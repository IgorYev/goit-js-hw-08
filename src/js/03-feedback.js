import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-user';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
};
const formState = throttle(() => {
  const email = refs.input.value;
  const message = refs.textarea.value;
  localStorage.setItem('STORAGE_KEY', JSON.stringify({ email, message }));
}, 500);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', formState); 


function restoreFormState() {
    const savedFormState = localStorage.getItem('STORAGE_KEY');
    if (savedFormState) {
        const formState = JSON.parse(savedFormState);
        refs.input.value = formState.email;
        refs.textarea.value = formState.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    const formState = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    console.log(formState);
    localStorage.removeItem('STORAGE_KEY');
    refs.form.reset();
}

restoreFormState();