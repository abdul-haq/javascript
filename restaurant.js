let res={
    name:'Kuchis',
    guestscap:75,
    guestcount:0,
    checkavailable:function (partysize)
    {
        let seatsleft=this.guestscap-this.guestcount
        return partysize<=seatsleft

    }
}

let seatparty=function(people)
{
    res.guestcount=res.guestcount+people
}
let remparty=function(people){
    res.guestcount=res.guestcount-people
}
console.log(res.checkavailable(4))
seatparty(70)
console.log(res.checkavailable(4))
seatparty(10)
console.log(res.checkavailable(4))
remparty(50)
console.log(res.checkavailable(4))

