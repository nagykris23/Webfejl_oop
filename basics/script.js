
// function player(nickname) {
//     this.nickname = nickname;
//     this.playedMatch = 0;
// }
// player.prototype.play = function () {
//     this.playedMatch++;
//     console.log(this.nickname, this.playedMatch)
// }

// player.prototype.gettierlevel = function () {
//     if (this.playedMatch < 4) {
//         return "A"
//     }
//     else if ( this.playedMatch < 7 && this.playedMatch > 3) {
//         return "B"
//     }
//     else {
//         return "C"
//     }

// }

class player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0;
    }
    play() {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch)
    }
    gettierlevel() {
        if (this.playedMatch < 4) {
            return "A"
        }
        else if (this.playedMatch < 7 && this.playedMatch > 3) {
            return "B"
        }
        else {
            return "C"
        }

    }
}


const gomszab = new player("gomszab1");

console.log(gomszab)


gomszab.play();
console.log(gomszab.gettierlevel())
gomszab.play();
console.log(gomszab.gettierlevel())

// function Person(name){
//     this.name = name
// }
class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
Person.prototype.getName = function () {
    return this.name
}

// function Student(name, school){
//     Person.call(this, name)
//     this.school = school
// }
class Student extends Person {
    constructor(name, school) {
        super(name)
        this.school = school;
    }
}

// Object.setPrototypeOf(Student.prototype, Person.prototype)

const student = new Student("Géza", "Bolyai")
console.log("név " + student.getName()+"|"+ "iskola " + student.school)

class Animal {
    constructor(name) {
        this.name = name;
    }
    hang() {
        console.log(this.name + " hangot ad ki")
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name)
    }
    repül() {
        console.log(this.name + " repül")
    }
}
class Mammal extends Animal {
    constructor(name) {
        super(name)
    }
    sétal(){
        console.log(this.name + " gyalogol")
    }
}
const bird = new Bird("cinege");
bird.hang()
bird.repül()

const mammal = new Mammal("Macska")
mammal.hang()
mammal.sétal()