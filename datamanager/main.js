/**
 * @typedef {{nev:String, eletkor:Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} person
 * @returns {void}
 * 
 * 
 */
class Datamanager {
    /**
    * @type {Person[]}
    */
    #array
    /**
     * @type {UpdateCallback}
     */
    #callback
    /**
     * 
     * @param {Person[]} kiscica 
     */
    constructor(kiscica = []) {
        this.#array = kiscica
        this.#callback = () => { }
    }
    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback) {
        this.#callback = callback
        this.#callback(this.#array)
    }
    /**
     * 
     * @param {Person[]} sok 
     */
    add(sok) {
        this.#array.push(sok)
        this.#callback(this.#array)

    }
    /**
     * 
     * @param {Number} kor 
     */
    filterage(kor) {
        const result = []
        for (const elem of this.#array) {
            if (elem.eletkor === kor) {
                result.push(elem)
            }
        }
        this.#callback(result)
    }
    /**
     * 
     * @param {String} neve 
     */
    filtername(neve) {
        const result = []
        for (const elem of this.#array) {
            if (elem.nev.includes(neve)) {
                result.push(elem)
            }
        }
        this.#callback(result)
    }
    /**
     * @param {function(Person):boolean}filtercb
     */
    fileter(filtercb) {
        const result = []
        for (const elem of this.#array) {
            if (filtercb(elem)) {
                result.push(elem)
            }
        }
        this.#callback(result)


    }
    ordbyage(){
        const agek =[]
        for (const elem of this.#array)
        
    }
    ordbyname(){

    }

}

class Datatable {
    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager) {
        const table = document.createElement('table')
        document.body.appendChild(table)

        const header = document.createElement('thead')
        table.appendChild(header)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        datamanager.setUpdateCallback((persons) => {

            console.log(persons)
            tbody.innerHTML = ''
            for (const pers of persons) {
                const sor = document.createElement('tr')
                tbody.appendChild(sor)

                const cella = document.createElement('td')
                cella.innerHTML = pers.nev
                sor.appendChild(cella)

                const cella2 = document.createElement('td')
                cella2.innerHTML = pers.eletkor
                sor.appendChild(cella2)

            }
        })

    }
}

const datamanager = new Datamanager([{ eletkor: 18, nev: "Levente" }, { eletkor: 23, nev: "Gergő" }, { eletkor: 11, nev: "Máté" }])
const datatable = new Datatable(datamanager)

const input = document.createElement('input')
document.body.appendChild(input)
input.addEventListener('input', (e) => {
    filterage(e.currentTarget.value)
    filtername(e.currentTarget.value)
})
const input1 = document.createElement('input')
document.body.appendChild(input1)
input1.type = "file"
input1.addEventListener('change', (e) => {
    const kicsi = e.target.files[0]
    const reader = new FileReader
    reader.readAsText(kicsi)
    reader.onload = (e) => {
        const filecontent = reader.result
        const alma = filecontent.split("\n")
        console.log(alma)
        for (const rohan of alma) {
            const alma2 = rohan.split(";")

            const pers = { nev: alma2[0], eletkor: Number(alma2[1]) }
            datamanager.add(pers)
        }
        datamanager.fileter(person => {
            return person.nev.includes("Katona")
        
        })
    }
})
