/**
 * @callback nextCardCallback
 * @param {string} text
 * 
 * @callback appendCardToSolutionCallback
 * @param  {string} text
 * 
 * @callback finishCallback
 * @param {string} result
 */
class Manager {
    /**
     * @type {Card[]}
     */
    #array
    /**
     * @type {Object} az igaznak vélt állítások
     */
    #solution
    /**
     * @type {Number}
     */
    #currentCardNumber
    /**
     * @type {nextCardCallback}
     */
    #nextCardCallback
    /**
     * @type {appendCardToSolutionCallback}
     */
    #appendCardToSolutionCallback
    /**
     * @type {finishCallback}
     */
    #finishCallback
    constructor(array) {
        this.#array = array
        this.#solution = {}
        this.#currentCardNumber = 0
    }
    /**
     * 
     * @param {nextCardCallback} callback tartalmazza a logikát amivel lefog futni amikor meghíjuk a függvényünket
     */
    setNextCardCallback(callback) {
        this.#nextCardCallback = callback
    }
    /**
 * 
 * @param {appendCardToSolutionCallback} callback tartalmazza a logikát amivel lefog futni amikor meghíjuk a függvényünket
 */
    setAppendCardToSolutionCallback(callback) {
        this.#appendCardToSolutionCallback = callback
    }


    /**
   * 
   * @param {finishCallback} callback tartalmazza a logikát amivel lefog futni amikor meghíjuk a függvényünket
   */
    setfinishCallback(callback) {
        this.#finishCallback = callback
    }
    /**
     * ezt a függvényt akkor híjuk majd meg ha egy új kártyára van szükségünk(ha a kártyára kattintunk vagy a skipre)
     * @param {string?} answer 
     */
    nextCard(answer) {
        if (answer) {//ha a kártyára kattintva lépünk eltároljuk az aktuális választ
            this.#solution[this.#currentCardNumber] = answer
            this.#appendCardToSolutionCallback(answer)
            // a solution objektumba csak azok a kártyáknak lesz értéke amit igaznak vélünk
        }
        this.#currentCardNumber++
        if (this.#currentCardNumber < this.#array.length) {
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
        }
        else {
            let sum = 0
            for (const index in this.#array) {
                if (this.#array[index].correct) {
                    if(this.#solution[index]){
                        sum++
                    }
                    
                } else {
                    if (!this.#solution[index]) {
                        sum++
                    }
                }
            }
            const result = `a feladatban elért pontszám az ${this.#array.length}/${sum}`
            this.#finishCallback(result)
        }
    }
    /**
     * megmutatja az első kártya tartalmát
     */
    start() {
        this.#nextCardCallback(this.#array[0].text)//0 vagy currentNumber

    }

}
