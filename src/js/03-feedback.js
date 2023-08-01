import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

const formState = throttle(() => {
    const email = refs.input.value;
    const message = refs.textarea.value;
    localStorage.setItem('feedback-form-user', JSON.stringify({email, message}));
  }, 500);

  function restoreFormState() {
    const savedFormState = localStorage.getItem('feedback-form-user');
    if (savedFormState) {
      const formState = JSON.parse(savedFormState);
      refs.input.value = formState.email;
      refs.textarea.value = formState.message;
    }
  }

  function onTextareaInput() {
    formState();
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const formState = JSON.parse(localStorage.getItem('feedback-form-user'));
    console.log(formState);
    localStorage.removeItem('feedback-form-user');
    refs.form.reset();
  }

  refs.form.addEventListener('submit', onFormSubmit);
  refs.textarea.addEventListener('input', onTextareaInput);

  restoreFormState();
