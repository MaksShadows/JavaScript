  class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };
    get id(){
        this._id = id;
        return id;
    }
    get name (){
        this._name = name;
        return name;
    }
    get sessionId(){
        this._sessionId = sessionId;
        return sessionId ;
    }
};



class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    get users(){
        return `${id} ${name} ${sessionId}`;
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
