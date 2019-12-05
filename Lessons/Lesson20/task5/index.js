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
        return this._users.map(  _i => i._name)
    };
    getUserIds() {
        return this._users.map( _i => i._id)
    };
    getUserNameById(userId) {
        let userName = this._users.find(i => i._id === userId)
        return userName === undefined ? [] : userName._name ;
    };
}

export { User, UserRepository }
