const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const nameInputElem = document.querySelector('#name');
const btnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');



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


const baseUrl = 'https://crudcrud.com/api/a9ec75833dfe4bf1b5de1e0797328f48/emailObjects';
const formElem = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc,[field,value]) => ({...acc, [field]:value}),{});
   
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData),
    }).then(() => {
        emailInputElem.value = '';
        nameInputElem.value = '';
        passwordInputElem.value = ''; 
        return fetch(baseUrl)
            .then(response => response.json())
            .then(arrayOfUserObjects => { 
           
                alert(JSON.stringify(arrayOfUserObjects));
            });
    })
    .catch(error => {
        pErrorText.textContent = 'Failed to create user';
        return new Error(console.log(`${error}`));
    });
}; 
formElem.addEventListener('submit', onFormSubmit);
