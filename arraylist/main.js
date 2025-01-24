class ArrayList {
    /**
     *  ez tárolja az arraylist hosszát 
     * @type {Number} 
     */
    #length
    #state

    get Count() {
        return this.#length//visszatér a length

    }
    constructor() {
        this.#length = 0
        this.#state = {}

    }
    Add(item) {
        const index = this.#length
        this.#state[index] = item
        Object.defineProperty(this, index,{//az akutális indexen keresztül szeretnénk elérni a hozzá adott elemet a példányok keresztül pl array 0 a 
            get :()=>{
                return this.#state[index]
            
            },
            set:(value)=>{
                this.#state[index]= value
            }
        })
         
        
        this.#length++
    }
    clear() {
        this.#length = 0
        this.#state = {}
    }

}
const pers = {}
pers.a = 'Ferenc'
pers['a'] = 'Józsi'
pers[0] = 'tojás'
console.log(pers)

const kakas = {}
Object.defineProperty(kakas, "king",{
        value: 'Gézuska',writable: true
    })
kakas.king = 'kuki'
console.log(kakas)

class Arrayhtmlelement extends HTMLElement{
    #tbody
    constructor(){
        super();
    } 
    connectedCallback(){
        const table = document.createElement('table')
        this.appendChild(table)

        const header = document.createElement('header')
        table.appendChild(header)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)

    }
    /**
     * 
     * @param {{nev:String eletkor:Number}} param 
     */
    addPersonRow(param){
        
        const row = document.createElement('tr')
        this.#tbody.appendChild(row)
        const cella = document.createElement('td')
        cella.innerHTML=param.nev
        row.appendChild(cella)
        const cella2 = document.createElement('td')
        cella2.innerHTML=param.eletkor
        row.appendChild(cella2)
    }
}
customElements.define('array-table',Arrayhtmlelement)
const arraytable = new Arrayhtmlelement()
document.body.appendChild(arraytable)
arraytable.addPersonRow({nev:"Bilba", eletkor:12})
arraytable.addPersonRow({nev:"Kósa", eletkor:61})
arraytable.addPersonRow({nev:"Kurta", eletkor:21})
arraytable.addPersonRow({nev:"Béci", eletkor:11})
