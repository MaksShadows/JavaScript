const userForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const onFormChange = () => {
    errorText.textContent = null;

    if (userForm.reportValidity()) {
        submitBtn.disabled = false;
    }
}
userForm.addEventListener("input", onFormChange);

const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = [...new FormData(userForm)]
        .reduce((acc, item) => {
            return {
                [item[0]]: item[1],
                ...acc,
            }
        }, {});

    postUser(formData)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((response) => {
            window.alert(JSON.stringify(response));
            userForm.reset();
            submitBtn.disabled = true;
        }
        ).catch(() => {
            errorText.textContent = 'Failed to create user';
            userForm.reset();
            submitBtn.disabled = true;
        });
}

userForm.addEventListener("submit", onFormSubmit);


const baseLink = 'https://crudcrud.com/api/a9ec75833dfe4bf1b5de1e0797328f48/createUSer';

const postUser = (newUserData) => {
    return fetch(baseLink, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUserData)
    })
}