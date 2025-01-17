const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
class Person {
    constructor(object){
        this.firstname1 = object.firstname1
        this.firstname2 = object.firstname2
        this.lastname = object.lastname
    }
    render(parent){
        const sorok = document.createElement('tr')
        parent.appendChild(sorok)
        const td = document.createElement('td')
        td.innerHTML = this.lastname
        sorok.appendChild(td)
        const td1 = document.createElement('td')
        td1.innerHTML = this.firstname1
        sorok.appendChild(td1)
        
        if(this.firstname2 == undefined){
            td1.colSpan = "2"
        }
        else{
            const td3 = document.createElement('td')
            td3.innerHTML = this.firstname2
            sorok.appendChild(td3)
        }
    }
}
class FormController{
    #form
    constructor(form){
        this.#form = form
    } 
    get lastname(){
        const vezetek = this.#getInputById('lastname')
        return vezetek.value
    }
    get firstname1(){
        const kereszt = this.#getInputById('firstname1')
        return kereszt.value
    }
    get firstname2(){
        const kereszt2 = this.#getInputById('firstname2')
        return kereszt2.value
    }
    #getInputById(id){
        return this.#form.querySelector('#' + id)
    }
}
function init(){
    const tbody = document.getElementById('tbodyId')
    const form = document.getElementById('form')
    const controll = new FormController(form)

    form.addEventListener('submit',function(e){
        e.preventDefault()
        const obj ={
            lastname: controll.lastname,
            firstname1: controll.firstname1,
            firstname2: controll.firstname2
        }
        const pers = new Person(obj)
        pers.render(tbody)
    })

    for(const elem of array){
        const person = new Person(elem)
        person.render(tbody)
    }
}
init();