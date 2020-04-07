const baseUrl = 'https://5e8c2dd9e61fbd00164ae811.mockapi.io/api/v1/tasks';
//const baseUrl = 'https://crudcrud.com/api/25de9be4acfd419a804b5d1c9a056c48/tasks';


const mapTasks = tasks =>
    tasks.map(({ _id, ...rest }) => ({...rest, id: _id }));

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
};

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData),
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    });
};
