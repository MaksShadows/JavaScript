  class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
    };

  
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
        let userName = this._users.find( ({ _id})  => _id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
