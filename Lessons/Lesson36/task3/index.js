  
const getUserData = (userId) => {

    const baseLink = `https://api.github.com/users/${userId}`
    const response = fetch(baseLink)
        .then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('Loading failed');
        })
        .then(value => value.blog)
        .catch(err => err);

    return response
}

 
export  const getUsersBlogs = async (userIdArr) => {
    try {
        const arrOfPromises = userIdArr.map(item => getUserData(item));

        const response = await Promise.all(arrOfPromises)
        console.log(response)
        return response;
    }
    catch (err) {
        return console.log(err.message)
    }
}


getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));
