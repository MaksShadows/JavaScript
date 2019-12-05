  class User {
    constructor(id, name, sessionId) {
        this._id = `${_id}`;
        this._name = `${_name}`;
        this._sessionId = `${_sessionId}`;
    };
};


class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);

    };

    get users(){
        return `${_id} ${_name} ${_sessionId}`;
    }

    getUserNames() {
        return this._users.map( i => i._name);
    };

    getUserIds() {
        return this._users.map( i => i._id);
    };

    getUserNameById(userId) {
        let userName = this._users.find(i => i._id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
