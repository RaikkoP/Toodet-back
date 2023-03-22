export class Kastuaja {
    constructor(
        private _id: number,
        public _username: string,
        private _password: string,
        private _name: string,
        private _surname: string
    ) {}        

    get id() {
        return this._id;
    }

    get password() {
        return this._password;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._username
    }

    get username() {
        return this._surname
    }

    set name(newName: string) {
        this._name = newName;
    }

    set surname(newSurname: string) {
        this._surname = newSurname;
    }

    set username(newUsername: string) {
        this._username = newUsername;
    }
}