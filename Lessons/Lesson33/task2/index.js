const inputNameEl = document.querySelector('.form__input-user-id');
const inputRepoEl = document.querySelector('.form__input-repo-id');
const inputDaysEl = document.querySelector('.form__input-days');
const usersListEl = document.querySelector('.users-list');

const showBtnEl = document.querySelector('.name-form__btn');
showBtnEl.addEventListener('click', onSearchDev);

const userAvaEl = document.querySelector('.user__avatar'); 

const defaultAva = 'https://avatars3.githubusercontent.com/u10001';
userAvaEl.src = defaultAva;

//`https://api.github.com/repos/roslavtseva/calendar/commits?per_page=100`

function getMostActiveDevs({ days, userId, repoId }) {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(respons => respons.json())
        .then(commits => getAllDevelopers(commits, days));
};

function onSearchDev() {
    const userId = inputNameEl.value;
    const repoId = inputRepoEl.value;
    const days = inputDaysEl.value;

    getMostActiveDevs({userId, repoId,  days }) 
        .then(users => renderUsers(users));
};


function getStartDate(daysAgo) {
    const now = new Date();
    return new Date(now.setDate(now.getDate() - daysAgo));
};

function getAllDevelopers(commits, days) {
    const dateFrom = getStartDate(days);

    const usersData = commits
        .filter(commit => new Date(commit.commit.author.date) - dateFrom > 0)
        .reduce((acc, commit) => {
            const id = commit.author.id;
            acc[id] = acc[id] ? acc[id] : {};
            const name = acc[id].name ? acc[id].name : commit.commit.author.name;
            const email = acc[id].email ? acc[id].email : commit.commit.author.email;
            const count = acc[id].count ? ++acc[id].count : 1;
            const avatar = acc[id].avatar ? acc[id].avatar : commit.author.avatar_url;

            return { ...acc, [id]: { id, name, email, count, avatar} };
        }, {});

    const arrUsers = Object.values(usersData)
        .sort((a, b) => b.count - a.count);
    const TopDevelopersCommits = arrUsers[0].count;

    return arrUsers.filter(({ count }) => TopDevelopersCommits === count);
};



function renderUsers(users) {
    let listItem = '';

    users.map(({ name, avatar }) => {
        listItem += `<li class="users-list__item">
                        <img class="user__avatar" src="${avatar}" alt="User Avatar">
                        <span class="user__name">${name}</span>
                    </li>`;
    });
    usersListEl.innerHTML = listItem;
};

const renderUserData = userData => {
    const { count, name, email, avatar } = userData;

    userAvaEl.src = avatar;
    userCommitEl.textContent = `${ "commits: " + count }`;
    userNameEl.textContent = `${"name: "+ name}|`;
    userEmailEl.textContent = `${'email: ' + email}|`
};

export { getMostActiveDevs };