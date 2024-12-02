
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

function Person(name){
    this.name = name
}

Person.prototype.GetName = function(){
    return this.name
}

function Student(name, school){
    Person.call(this, name)
    this.school = school
}

Object.setPrototypeOf(Student.prototype, Person.prototype)