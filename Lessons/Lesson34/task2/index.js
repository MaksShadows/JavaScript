const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const nameInputElem = document.querySelector('#name');
const btnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');


const baseUrl = 'https://crudcrud.com/api/a9ec75833dfe4bf1b5de1e0797328f48/users';
const formElem = document.querySelector('.login-form');


const isRequiredPassword = value => value ? undefined : 'Required password';

const isRequiredName = value => value ? undefined : 'Required name';

const isRequiredEmail = value => value ? undefined : 'Required email';
const isEmail= value => value.includes('@') ? undefined : 'Should be an email';

const validatorsByFields = {
    email: [isRequiredEmail, isEmail],
    password: [isRequiredPassword],
    name: [isRequiredName],
};

const validate = (fieldName, value) => {
    const validators = validatorsByFields[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join('');
};

const formSubmit = event => {
    event.preventDefault();


    const formData = [...new FormData(formElem)]
        .reduce((acc, [key, value]) => ({...acc, [key]: value }), {});

    dataSave(formData)
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            formElem.reset();
        })
        .catch(() => {
            errorElem.textContent = 'Failed to create user';

        });

    submitBtnElem.setAttribute('enabled', 'disabled');

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}

formElem.addEventListener('submit', formSubmit);

