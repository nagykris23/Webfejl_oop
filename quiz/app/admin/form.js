/**
 * felel a formért
 */
class FormController{
    /**
     * @type {formField[]}
     */
    #formFieldArray
    /**
     *  @type {Manager}
     */
    #mannager
    /**
     * 
     * @param {Manager} manager 
     * @param {{id: string, label: string}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        const form = document.createElement('form')
        this.#formFieldArray = []
        document.body.appendChild(form)
        this.#mannager = manager

        for(const config of fieldConfiguration){
            const formField = new FormField(config.id, config.label)
            this.#formFieldArray.push(formField)
            form.appendChild(formField.getFormField())
        }
        const button = document.createElement('button')
        button.textContent = 'Elkuld'
        form.appendChild(button)
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
           if(this.#validatAllFields()){
                const value = this.#getvalueObject()
                const answers = [
                    value.answer1,
                    value.answer2,
                    value.answer3,
                    value.answer4
                ]
                const question = new Question(value.questionText, answers, value.rightAnswer)
                this.#mannager.add(question)
                e.target.reset();
                
            }

            //hozza adjuk a managerhez, majd reseteljuk


        })

        
    }
    /**
     * validálja a fieldeket
     * @returns {boolean} igaz ha minden mező helyes, egyébként hamis
     */
    #validatAllFields(){
        let valid =true
        for(const field of this.#formFieldArray){
            field.error = ''
            if(field.value === ''){
                field.error = 'Mező kitőltése kötelező'
                valid = false

            }

        }
        return valid
    }
    /**
     * vissza tér a fieldek értékeivel és idjaival
     * @returns {{questionText:stringanswer1:stringanswer2:stringanswer3:stringanswer4:stringrightAnswer:string}}
     */
    #getvalueObject(){
        let type = '{'
        const result = {}
        for(const field of this.#formFieldArray){
            result[field.id] = field.value
            type += `${field.id}:${typeof field.value}`
        }
        type+='}'
        console.log(type)
        return result
    }

}
class FormField{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {HTMLLabelElement}
     */
    #label
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {HTMLSpanElement}
     */
    #errorFields

    get id(){
        return this.#id
    }
    get value(){
        return this.#input.value
    }
    /**
     *  error üzenet 
     *  @param {string} value
     */
    set error(value){
        this.#errorFields.textContent = value
    }
    /**
     * 
     * @param {string} id azonositja a formfield peldanyunkat
     * @param {string} labelContent a label szoveg 
     */
    constructor(id, labelContent){
        this.#id = id
        this.#label =  Gomszab.makeLabel(id, labelContent)
        this.#input = Gomszab.makeInput(id)
        this.#errorFields = Gomszab.makeErrorField()

    }
    /**
     * 
     * visszatér egy olyan divel ami tartalmazza a formfieldben létreozott htmlelemeket
     * @returns {HTMLDivElement}
    */
    getFormField(){
        const div = Gomszab.makeDiv([this.#label,this.#input,this.#errorFields])
        return div
    }
}