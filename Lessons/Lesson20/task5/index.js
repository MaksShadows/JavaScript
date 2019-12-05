  class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
    };

    get Users(){
        return `${this.id} ${this.name} ${this.sessionId}`;
    }
};



class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);
    };

    get users(){
        return `${_id} ${_name} ${_sessionId}`;
    }

    getUserNames() {
        return this._users.map( ({ _name}) => _name);
    };

    getUserIds() {
        return this._users.map( ({ _id}) => _id);
    };

    getUserNameById(userId) {
        let userName = this._users.find(i => i._id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
