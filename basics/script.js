
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

// Player osztály létrehozása
class player {
    constructor(nickname) { 
        // Játékos becenevét tárolja
        this.nickname = nickname;
        //meccsek száma (kezdetben 0)
        this.playedMatch = 0;
    }
    
    //  növeli a játszott meccsek számát és kiírja a játékos nevét + játszott meccsek számát
    play() {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch);
    }

    // visszaadja a játékos szintjét a játszott mecsek száma alaoján
    gettierlevel() {
        if (this.playedMatch < 4) { 
            return "A"; // ha a játszott meccsek száma kevesebb mint 4 akkor a tier
        } else if (this.playedMatch < 7 && this.playedMatch > 3) {
            return "B"; // ha a játszott meccsek 4 és 6 között vannak akkor b tier
        } else {
            return "C"; // ha a játszott meccsek száma legalább 7 vagy több akkor c tier
        }
    }
}


// Új játékos létrehozása
const gomszab = new player("gomszab1");

console.log(gomszab); // A játékos kiíratása

gomszab.play(); // Meccs játszása
console.log(gomszab.gettierlevel()); //A szint kiirása 
gomszab.play(); // Meccs játszása
console.log(gomszab.gettierlevel()); // Szint kiirása

// function Person(name){
//     this.name = name
// }

// Person osztály létrehozása
class Person {
    constructor(name) {
        this.name = name; // Személy nevét tárolja
    }

    // visszaadja a személy nevét
    getName() {
        return this.name;
    }
}


// Person.prototype.getName = function () {
//     return this.name
// }

// function Student(name, school){
//     Person.call(this, name)
//     this.school = school
// }

// Student osztály, amely örökli a Person osztály tulajdonságait
class Student extends Person {
    constructor(name, school) {
        super(name); // Meghívja a Person osztályt
        this.school = school; // Diák iskoláját tárolja
    }
}

// Object.setPrototypeOf(Student.prototype, Person.prototype)

// Új diák létrehozása
const student = new Student("Géza", "Bolyai");
console.log("név " + student.getName() + " | iskola " + student.school); // Diák neve és iskolájának kiirása

// Animal osztály létrehozása
class Animal {
    constructor(name) {
        this.name = name; // Állat nevét tárolja
    }

    // kiírja hogy az állat hangot ad ki
    hang() {
        console.log(this.name + " hangot ad ki");
    }
}
// Bird osztály amely örökli az Animal osztály tulajdonságait
class Bird extends Animal {
    constructor(name) {
        super(name); // Meghívja az Animal osztályt
    }

    // kiírja hogy a madár repül
    repul() {
        console.log(this.name + " repül");
    }
}

// Mammal osztály amely örökli az Animal osztály tulajdonságait
class Mammal extends Animal {
    constructor(name) {
        super(name); // Meghívja az Animal osztályt
    }

    //kiírja, hogy az emlős gyalogol
    setal() {
        console.log(this.name + " gyalogol");
    }
}

//Új bird létrehozása
const bird = new Bird("cinege");
bird.hang(); // Madár hangot ad
bird.repul(); // Madár repül

// ugyan az mint a madár 
// Új mammal létrehozása
const mammal = new Mammal("Macska");
mammal.hang(); // Emlős hangot ad
mammal.setal(); // Emlős gyalogol