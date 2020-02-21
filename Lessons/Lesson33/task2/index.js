const userAvatarElem = document.querySelector('.user__avatar'); 
const userNameElem = document.querySelector('.user__name');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;



const showUserBtnElem = document.querySelector('.name-form__btn');
const userIdInputEelem = document.querySelector('.id-form__input');
const userRepoInputEelem = document.querySelector('.repo-form__input');
const userDaysInputEelem = document.querySelector('.days-form__input');


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




const forGetUserObject = () => {
    const days = userDaysInputEelem.value;
    const userId = userIdInputEelem.value;
    const repoId = userRepoInputEelem.value;
    getMostActiveDevs({ userId, repoId, days });
};
showUserBtnElem.addEventListener('click', forGetUserObject);


export const getMostActiveDevs = ({ userId, repoId, days }) => {
    const object = { userId, repoId, days };
    let maxCount = 0;
    const startDate = new Date(new Date().setDate(new Date().getDate() - object.days));
    return fetch(`https://api.github.com/repos/${object.userId}/${object.repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(fullArray => {
           const filteredDateArray = fullArray
                .map(elem => {
                    return {
                        name: elem.commit.author.name,
                        email: elem.commit.author.email,
                        date: new Date(elem.commit.author.date),
                    }
                })
                .filter(elem => elem.date > startDate)
                .sort((a,b) => a.name.localeCompare(b.name))
                .reduce((acc, elem, index, array) => {
                    let count = 0;
                    array.forEach(element => {
                        if(elem.name === element.name) count++;
                    })
                    array.splice(0,count-1);
                    acc.push({
                        count: count,
                        name: elem.name,
                        email: elem.email,
                    });
                    return acc;
                },[]);
            filteredDateArray.forEach(elem => {
                if(elem.count > maxCount) maxCount = elem.count;
            });
            return filteredDateArray
                .filter(elem => elem.count === maxCount);
        });
};