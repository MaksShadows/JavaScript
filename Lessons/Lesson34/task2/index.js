const baseUrl = 'https://crudcrud.com/api/a9ec75833dfe4bf1b5de1e0797328f48/tasks';

const page = document.querySelector('.page')
const sendBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPassword = document.querySelector('#password');
const form = document.querySelector('.login-form')

const createUser = userData => {
    return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => JSON.stringify(data));
}

const validator = () => {
    // console.log('work')
    if (inputEmail.validity.valid && inputName.validity.valid && inputPassword.validity.valid) {
        sendBtn.disabled = false

    } else {
        sendBtn.disabled = true;
    }
}

const sendUser = (event) => {
    event.preventDefault();
    const formData = [...new FormData(form)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
    let newUser = formData
    createUser(newUser)
        .then(data => {
            inputEmail.value = '';
            inputName.value = '';
            inputPassword.value = '';
            sendBtn.disabled = true;
            alert(data);
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        })
}
page.addEventListener('click', validator)
sendBtn.addEventListener('click', sendUser)
