
class Factory {
    // TODO 1, 2, 3, 4, 9, 10

    constructor() {// nem kell tulajdonság mert késöbb fogjuk feltölteni
        this.manolista = []//üres lista manolista példányosításakor
    }
    manoadd(mano) {//függvény letrehozasa mano parameter mert feltoltjuk
        this.manolista.push(mano);//manolistahoz hozza fuzunk egy elemet this egy factory peldany
        createRow(mano)
    }
    creatID(){//id létrehozása
        return this.manolista.length//returnölés
    }
}

class Companion {
    // TODO 5
    constructor(id, kernev, veznev, reszleg) {//ezek nelkul nem ertelmezzuk a peldat
        this.id = id;
        this.kernev = kernev;
        this.veznev = veznev;
        this.reszleg = reszleg;

        this.productlist = [];//ures tomb nincs cucc mikor regel
    }
    getname(){//nem kell neki parameter mert a peldany parameteret latja 
        return this.kernev + "|" + this.veznev;
    }
   addpruduct(product){
        this.productlist.push(product);//ez is hozza adja a pruductot a listahoz
   } 
}
