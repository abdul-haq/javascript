const todos=[{
    text:'Task 1',
    completed:true
},{
    text:'Task 2',
    completed:false
},{
    text:'Task 3',
    completed:true
},{
    text:'Task 4',
    completed:false
}]


const filtertxt={
    searchtxt:'',
    hidecompleted:false
}

const renderr=((todoo,filter)=>{
    let fildata=todoo.filter(el=>{
        const hidecom=!filter.hidecompleted || !el.completed
        const squery=el.text.toLowerCase().includes(filter.searchtxt.toLowerCase())
        return hidecom && squery
  
    })
    // fildata=fildata.filter(el=>{
    //     return 
    //     // if (filter.hidecompleted) {
    //     //     return !el.completed
    //     //  }
    //     //  else
    //     //  {
    //     //      return true
    //     //  }
    // })
    const leftt=document.createElement('h5')
    const p=fildata.filter(todo=>{
    return !todo.completed
    })




    document.querySelector('#div-todo').innerHTML=''

    leftt.textContent=`you have ${p.length} todos left `.toUpperCase()

    document.querySelector('#div-todo').appendChild(leftt)
    fildata.forEach(e=>{
    const p=document.createElement('p')
    p.textContent=e.text
    document.querySelector('#div-todo').appendChild(p)
    })

})
renderr(todos,filtertxt)



// todos.forEach(element => {
//     const p=document.createElement('p')
//     p.textContent=element.text
//     document.querySelector('body').appendChild(p)
// });


document.querySelector('#addtodo').addEventListener('input',(v)=>{
    filtertxt.searchtxt=v.target.value
    renderr(todos,filtertxt)

})
document.querySelector('#hidetodo').addEventListener('change',(e)=>{
    filtertxt.hidecompleted=e.target.checked
    renderr(todos,filtertxt)
})

document.querySelector('#todo-form').addEventListener('submit',(e)=>{
e.preventDefault()
// console.log(e.target.elements.todoitem.value)


todos.push({
    text:e.target.elements.todoitem.value,
    completed:false
})

renderr(todos,filtertxt)
e.target.elements.todoitem.value=''
})

// const p=document.querySelectorAll('p')

// p.forEach(element => {
//     if (element.textContent.toLowerCase().includes('-')) {
//         element.remove()
        
//     }
    
    
// });
