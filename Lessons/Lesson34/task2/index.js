const baseUrl = 'https://crudcrud.com/api/a9ec75833dfe4bf1b5de1e0797328f48/tasks';


const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const formElem = document.querySelector('.login-form');




const onInputChange = () => {
    const isValidForm = formElem.reportValidity();
    if (isValidForm) {
        submitBtnElem.removeAttribute('disabled');
        errorElem.textContent = '';
    } else {
        submitBtnElem.setAttribute('disabled', true);
        errorElem.textContent = '';
    }
};



const formSubmit = event => {
    event.preventDefault();

    const formData = [...new FormData(formElem)]
        .reduce((acc, [key, value]) => ({...acc, [key]: value }), {});

        return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            submitBtnElem.setAttribute('disabled', true);
            formElem.reset();
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorElem.textContent = 'Failed to create user';

        });

}

formElem.addEventListener('submit', formSubmit);
formElem.addEventListener('input', onInputChange);
