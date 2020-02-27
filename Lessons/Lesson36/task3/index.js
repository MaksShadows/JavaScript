const fetchUser = async userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json());

const getUsersBlogs = async (userIdArr) => {
    try {
        const arrOfPromises = userIdArr.map(item =>  fetchUser (item));

        const response = await Promise.all(arrOfPromises)
        console.log(response)
        return response;
    }
    catch (err) {
        return console.log(err.message)
    }
}

getUsersBlogs(["facebook", "google"])
.then(response => console.log(response))

export { getUsersBlogs };