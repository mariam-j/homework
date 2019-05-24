//class Author

class Author {

    constructor(name, email, gender) {

        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get gender() {

        return this._gender;
    }

    set name(value) {
        return this._name = value;
    }

    set email(value) {
        return this._email = value;
    }

    set gender(value) {
        return this._gender = value;
    }

    toString() {
        return `Author's name is ${this.name}`;
    }
}

//class Book
class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this._quantity;
    }

    set title(value) {
        return this._title = value;
    }

    set author(value) {
        return this._author = value;
    }

    set price(value) {
        return this._price = value;
    }

    set quantity(value) {
        return this._quantity = value;
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        return `The author of the book ${ this.title }
        is ${ this.author }`;
    }
}

//class Account
class Account {

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set name(value) {
        return this._name = value;
    }

    set balance(value) {
        return this._balance = value;
    }

    credit(amount) {
        return this.balance = this.balance + amount;
    }

    debit(amount) {
        if (amount < this.balance) {
            return this.balance = this.balance - amount;
        } else {
            return `Amount exceeded balance`;
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount < this.balance) {
            return this.balance = anotherAccount + (this.balance - amount);
        } else {
            return `Amount exceeded balance`;
        }
    }

    identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.balance === accountSecond.balance && accountFirst.name === accountSecond.name) {
            return `Accounts are the same`;
        } else {
            return `Accounts are not the same`;
        }
    }
    toString() {
        return `Account name is ${this.name}`;
    }
}

//classes Person, Student, Staff

class Person {

    constructor(firstName, lastName, gender, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get gender() {
        return this._gender;
    }

    get age() {
        return this._age;
    }

    set firstName(value) {
        return this._firstName = value;
    }

    set lastName(value) {
        return this._lastName = value;
    }

    set gender(value) {
        return this._gender = value;
    }

    set age(value) {
        return this._age = value;
    }
}

class Student extends Person {

    constructor(firstName, lastName, gender, age, programme, year, fee) {

        super(firstName, lastName, gender, age);
        this.programme = programme;
        this.year = year;
        this.fee = fee;
    }

    get programme() {
        return this._programme;
    }

    get year() {
        return this._year;
    }

    get fee() {
        return this._fee;
    }

    set programme(value) {
        return this._programme = value;
    }

    set year(value) {
        return this._year = value;
    }

    set fee(value) {
        return this._fee = value;
    }

    passExam(program, grade) {
        if (this.programme.indexOf(program) === -1) {
            return `Invalid program`;
        }

        for (let i = 0; i < this.programme.length; i++) {

            if ((this.programme[i] === program) && (grade >= 50)) {
                return ++this.year;
            } else if ((this.programme[i] === program) && (grade < 50)) {
                return `${this.firstName} ${this.lastName} failed`;
            }
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName} is on ${this.year} year`;
    }
}

class Teacher extends Person {

    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }

    get program() {
        return this._program;
    }

    get pay() {
        return this._pay;
    }

    set program(value) {
        return this._program = value;
    }

    set pay(value) {
        return this._pay = value;
    }

    toString() {
        return `The teacher is ${this.firstName} ${this.lastName}`;
    }
}