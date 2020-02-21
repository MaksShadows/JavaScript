const userAvatarElem = document.querySelector('.user__avatar'); 
const userNameElem = document.querySelector('.user__name');
const showUserBtnElem = document.querySelector('.name-form__btn');

const userIdInputEelem = document.querySelector('.id-form__input');
const userRepoInputEelem = document.querySelector('.repo-form__input');
const userDaysInputEelem = document.querySelector('.days-form__input');


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
	const userName = userIdInputEelem.value;
	fetchUserData(userName)
        .then(userData => renderUserData(userData));
};
showUserBtnElem.addEventListener('click', onSearchUser);


const getObject = () => {
    const days = userDaysInputEelem.value;
    const userId = userIdInputEelem.value;
    const repoId = userRepoInputEelem.value;
    getMostActiveDevs({ userId, repoId, days });
};
showUserBtnElem.addEventListener('click', getObject);

export const getMostActiveDevs = ({ userId, repoId, days }) => {
    const object = { userId, repoId, days };
    let counter = 0;

    const startDate = new Date(new Date().setDate(new Date().getDate() - object.days));
    fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(array => {
            let result = array.map(({ commit: { author: { name, email, date } } }) => ({ name, email, date }))
                .filter(item => new Date(item.date) > startDate)
                .reduce((acc, { email, name }) => {
                    const oldCount = acc[email] ? acc[email].count : 0;
                    return {
                        ...acc,
                        [email]: { name, email, count: oldCount + 1 }
                    };
                }, {});

            const arr = Object.values(result);
            arr.forEach(elem => {
                if (elem.count > counter) counter = elem.count;
            });
            return arr.filter(elem => elem.count === counter);
        });

};
