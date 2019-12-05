  class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
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
        return this._users.map( () => _name);
    };

    getUserIds() {
        return this._users.map( () => _id);
    };

    getUserNameById(userId) {
        let userName = this._users.find( ()  => _id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
