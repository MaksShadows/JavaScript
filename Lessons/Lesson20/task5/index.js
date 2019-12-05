  class User {
    constructor(id, name, sessionId) {
        this._id =  id;
        this._name = name;
        this._sessionId = sessionId;
    };
};


class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    get UserNames() {
        return this._users.map( ({_name}) => _name);
    };

    get UserIds() {
        return this._users.map( ({ _id}) => _id);
    };

    get UserNameById(userId) {
        let userName = this._users.find(i => i._id === userId)
        return userName === undefined ? [] : userName._name ;
    };
};


export { User, UserRepository }
