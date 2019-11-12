let multiplier=function(a,b,c){
    return a*b*c
}

let answer = multiplier(10,20,20)
console.log(answer)
// agr me scope me calling k waqt koi value mh dera to
//value jo by default hai wo utha lega 
let tip=function(amount,tip=.2)
{
    return `${tip*100}% tip on total of $${amount} would be $${tip*amount}`
}
//.30 se mene default value ko override kia hai
console.log(tip(200,.30))

let name ='haq'
console.log(`hey my name is ${name}`)