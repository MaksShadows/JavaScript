class User {
    constructor(id, name, sessionld) {
        this._id = id;
        this._name = name;
        this._sessionld = sessionld;
    }
}

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);;
    }

    getUserNames() {
        return this._users.map(i => i._name)
    };
    getUserIds() {
        return this._users.map(i => i._id)
    };
    getUserNameById(id) {
        let userName = this._users.find(i => i._id === id)
        return userName != 'undefined' ? userName._name : [];
    };
}

export { User, UserRepository }
