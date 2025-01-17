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
            get : function(){
                return this.#state[index]
            
            },
            set: function(value){
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