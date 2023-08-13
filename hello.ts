class User {
    constructor(public username: string) {
    }

    get upperName() {
        return this.username.toUpperCase()
    }
}

const user = new User('Typescript');
console.log(JSON.stringify(user))
