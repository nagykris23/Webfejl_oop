const sum=(c, d)=>{
    return c + d 
}
console.log(sum(3,5))

const obj = {}
obj.calculate1 = sum
obj.calculate1(3,5)

console.log(obj.calculate1(3,5))



obj.calculate2=(emberseg)=>{
    const a = 3
    const b = 5
    return emberseg(a,b)
    
}
const res1 =  obj.calculate2((szam1,szam2)=>{return szam1 + szam2})
console.log(res1)
const res2 =  obj.calculate2((szam1,szam2)=>{return szam1 - szam2})
console.log(res2)

obj.calculate3=(szam1,szam2,cb1)=>{
    const aziz =cb1(szam1,szam2)
    return aziz
}
const res3=obj.calculate3(7,8,(szam1,szam2)=>{
    return szam1*szam2
})
console.log(res3)

const aFunction =() =>{
    const szam = 10 
    const res12 =obj.calculate2((szam1,szam2)=>{return szam*szam1 - szam2})
    console.log(res12)
}
aFunction()