
// let cent=(fare-32)*5/9
// let kelvin=(fare+459.67)*5/9

let conv= function (fare)
{
   return{
       fare:fare,
       cent:(fare-32)*5/9,
       kelvin:(fare+459.67)*5/9
   }
}

let centf=conv(74)
console.log(centf.cent)
console.log(centf.kelvin)