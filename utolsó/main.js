class Person{
    #name 
    #birth
    #mood

    constructor(name,birth,mood){
        this.#name = name
        this.#birth = birth
        this.#mood = mood
    }
    get name(){
       return this.#name 
    }
    set name(value){
        this.#name=value
    }
    get birth(){
        return this.#birth
    }
    set mood(value){
        this.#mood=value
    }

}
const person =  new Person('Márton','2000','Spicy')
class PersonView{
    #person
    #span
    constructor(person){
        this.#person = person
        
        const div = document.createElement('div')
        div.innerText = `${this.#person.name}-${this.#person.birth}`
        document.body.appendChild(div)
        const span = document.createElement('span')
        document.body.appendChild(span)
        this.#span = span
        
    }
    set footer(value){
        this.#span.innerText = value
    }
}
const personview = new PersonView(person)
person.mood = ''
console.log(person)
const personview2 = new PersonView(person)
personview2.footer = 'lablec'