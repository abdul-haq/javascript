const account={
    name:'Haq',
    expense:[],
    addexpense:function(title,amount)
    {
        this.expense.push({title:title,amount:amount})
    },
    income:[],
    addincome:function(title,amount)
    {
        this.income.push({title:title,amount:amount})
    },
    accsum:function(){
        let totalExpense=0,totalIncome=0
        this.expense.forEach(function(expense){
            totalExpense=totalExpense+expense.amount
        })
        this.income.forEach((incomecl)=>{
            totalIncome=totalIncome+incomecl.amount
        })
        return `\n" Account Summary "\n\n${this.name} has balance of $${totalIncome-totalExpense} \n-----------------------------------------\n\n$${totalIncome} in income \n$${totalExpense} in expenses`

    }
}
account.addexpense('coffee',120)
account.addexpense('lunch @ kfc',300)
account.addincome('Salary',10000)
account.addincome('tuitions',500)
console.log(account.accsum())