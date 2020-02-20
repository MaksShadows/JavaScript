const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const showUserBtnElem = document.querySelector('.name-form__btn');

const userIdInputElem = document.querySelector('.id-form__input');
const userRepoInputElem = document.querySelector('.repo-form__input');
const userDaysInputElem = document.querySelector('.days-form__input');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json());
};

const renderUserData = userData => {

    const { avatar_url, name } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;

};

const onSearchUser = () => {
    const userName = userIdInputElem.value;
    fetchUserData(userName)
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);


const getUserObject = () => { 
    const userId = userIdInputElem.value;
    const repoId = userRepoInputElem.value;
    const days = userDaysInputElem.value;
  
};

showUserBtnElem.addEventListener('click', getUserObject);