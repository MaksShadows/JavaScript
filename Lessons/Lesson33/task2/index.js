const getWinnersArray = (arr, days) => {

    const fromDate = new Date().setDate(days);
    const filteredArr = arr.filter(item => new Date(item.commit.author.date) >= fromDate);

    const getCounts = filteredArr.reduce((acc, item) => {
        const count = acc[item.commit.author.email] || 0;
        return {
            ...acc,
            [item.commit.author.email]: count + 1
        };
    }, {});

    const getNewArr = filteredArr.reduce((acc, item) => {
        if (acc.find(accItem => accItem.email == item.commit.author.email)) {
            return [...acc]
        } else {
            return [
                ...acc,
                {
                    count: getCounts[item.commit.author.email],
                    name: item.commit.author.name,
                    email: item.commit.author.email
                }]
        };
    }, [])

    const theBiggestCount = getNewArr.reduce((acc, item) =>
        item.count > acc
            ? item.count
            : acc
        , getNewArr[0].count);

    return getNewArr.filter(item => item.count === theBiggestCount);
}


export const getMostActiveDevs = (object) => {
    const { days, userId, repoId } = object

    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(value => getWinnersArray(value, days));
}
