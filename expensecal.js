let myacc={
    account:'Andrew',
    expense:0,
    income:0
}

let addincome=function(acc,am)
{
acc.income=acc.income+am
}
let addexpense=function(acc,am)
{
acc.expense=acc.expense+am
}
let reset=function(acc)
{
    acc.income=0
    acc.expense=0
}
let accountd=function(acc)
{
return `\n------------------Account Summary------------------\n\nAccount for ${acc.account} has $${acc.income-acc.expense}\n\n$${acc.income} in income\n$${acc.expense} in expense`
}

let addmon=addincome(myacc,1000)
let cutex=addexpense(myacc,50)
let cutex2=addexpense(myacc,50)

console.log(accountd(myacc))
let res=reset(myacc)
console.log(accountd(myacc))