function fun(param){
    console.log(param.nev)
}
const zsakos = fun
const apu = function(param){
    console.log(param.nev)
}

fun({nev:"Bilbó"})
zsakos({nev:"Bilbó"})
apu({nev:"Kirgó"})

const anyu = function(){
    console.log(this.nev)
}
const tojgli = anyu.bind({nev:"Ringó"})
tojgli()

const nagyapa =(param)=>{
    console.log(param.nev)
}
const obj = {
    apu:(param)=>{
        console.log(param.nev)
    },
    anyu:(param)=>{
        console.log(param.eletkor)
    }
}
const pers1 ={
    eletkor:12,
    nev:"boba"
    
}
obj.apu(pers1)
obj.anyu(pers1)
