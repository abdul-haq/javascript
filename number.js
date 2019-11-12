//random number generator
//Math.floor(Math.random()*(max-min+1))+min

let guessgame=function(num)
{
    let min=1
    let max=5
    return num===Math.floor(Math.random()*(max-min+1))+min
}

console.log(guessgame(2))
