/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
      firstName: 'Géza',
      lastName: 'Kiss',
      area: 'plastic',
      products: ['kisauto', 'barbibaba']
   },
   {
      firstName: 'Ferenc',
      lastName: 'Tóth',
      area: 'paper',
      products: ['könyv']
   },
   {
      firstName: 'Gábor',
      lastName: 'Nagy',
      area: 'plastic',
      products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit', function (e) {
   e.preventDefault();
   const form = e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit', function (e) {
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});

/**
* table render
*/
function initTable() {
   // TODO 6
   for (let i = 0; i < companionList.length; i++) {// vegig megyünk a listan
      const currentElement = companionList[i]//valtozoba bombazzuk a lista iedik elem
      const companion = new Companion(//peldanyositjuk a compaiont a classbol a sorrend a calass construktora ertekei megadasatol fugg  
         i,
         currentElement.firstName,
         currentElement.lastName,
         currentElement.area
      )
      for(const pr of currentElement.products){// vegig megyunk a productson mert egyessevel adjuk hozza a productokat a compainhoz
         companion.addpruduct(pr)//itt adjuk hozza 
      }
      factory.manoadd(companion)//hozzaadjuk a manot a factoryhoz(ugyan az mint a mano)
   }
   console.log(factory)//consolba logolas


}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e) {
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
}