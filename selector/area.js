class Area {
    /**
     * @type {HTMLDivElement} az adott area peldany teruletének eleme
     */
    #div
    get div() {
        return this.#div

    }
    /**
     * @param {string} cssclass bealitja az adott css osztályt
     * @param {Manager} manager
     */
    constructor(cssclass, manager) {
        const container = this.#getContainer()
        this.#div = document.createElement('div')//ezen a területen fogunk dolgozni a leszarmazotaknál
        this.div.className = cssclass
        container.appendChild(this.#div)
        manager.setfinishCallback((eredmeny) => {
            container.innerHTML = ''
            const div = document.createElement('div')
            div.className = 'result'
            div.textContent = eredmeny
            container.appendChild(div)
        })
    }
    /**
     * @return {HTMLDivElement}
     */
    #getContainer() {
        let container = document.querySelector('.container')
        if (!container) {
            container = document.createElement('div')
            container.className = "container"
            document.body.appendChild(container)
        }
        return container
    }
}

/**
 * ez fogja tartalmazni a paklinkat mindig egy darab kártya jelenik meg
 */
class DeckArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager) {
        super(cssClass, manager)
        manager.setNextCardCallback((kartyaszoveg) => {//ez fog lefutni amikor új kártyát huzunk amikor megivjuk a nextcardcallbacket 
            this.div.innerHTML = ''
            const skipbutton = document.createElement('button')
            skipbutton.textContent = 'skip'
            skipbutton.addEventListener('click', () => {
                manager.nextCard()
            })
            this.div.appendChild(skipbutton)
            const cardElement = document.createElement('div')
            cardElement.textContent = kartyaszoveg
            cardElement.className = 'largecard'
            cardElement.addEventListener('click', () => {
                manager.nextCard(kartyaszoveg)
            })
            this.div.appendChild(cardElement)
        })

    }
}
/**
 * ez fogja tartalmazni az igaznak vélt kártyáink
 */
class SolutionArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager) {
        super(cssClass, manager)
        manager.setAppendCardToSolutionCallback((kartyaszoveg) => {
            const card = document.createElement('div')
            card.className = 'card'
            card.textContent = kartyaszoveg
            this.div.appendChild(card)
        })
    }
}