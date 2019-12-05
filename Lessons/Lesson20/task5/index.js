  class User {
    constructor(id, name, sessionId) {
        this.#id = `${id}`;
        this.#name = `${name}`;
        this.#sessionId = `${sessionId}`;
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
        return this._users.map( ({ _name}) => _name);
    };

    getUserIds() {
        return this._users.map( ({ _id}) => _id);
    };

    getUserNameById(userId) {
        let userName = this._users.find( ({ _id})  => _id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
