const fetchUser = async userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json());

export const getUsersBlogs = async usersArray => {
    let usersData = usersArray
        .map(elem => fetchUser(elem));
    let userEmail = await Promise.all(usersData)
    return userEmail
        .map(({ blog }) => blog);
}



getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));