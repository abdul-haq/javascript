// const todo=['task 1','task 2','task 3','task 4','task 5']

// // console.log(`last todo -> ${todo[todo.length-1]}`)
// // console.log(`second last todo -> ${todo[todo.length-2]}`)

// todo.splice(2,1)
// // console.log(todo)
// todo.push('new task')
// // console.log(todo)
// todo.shift()

// // console.log(todo)
// // console.log(`you have ${todo.length} todos\n`)
// todo.forEach(function(item,index)
// {
//     index=index+1
//     console.log(`${index}. ${item}`)
// })

// // for(let i=0;i<=todo.length-1;i++){
// //     console.log(`${i+1}. ${todo[i]}`)
// // }

const todo=[{
    text:'t1',
    completed:true
},{
    text:'t2',
    completed:false
},{
    text:'t3',
    completed:true
},{
    text:'t4',
    completed:false
}]

let sorttodo=function(todoo)
{
todoo.sort(function(a,b)
{
    if(a.completed&&!b.completed)
    {
        return 1
    }
    else if(!a.completed&&b.completed)
    {
        return -1
    }
    else 
    {
        return 0
    }
})
}
sorttodo(todo)
console.log(todo)

// let str=''
// let str2=''
// for (let i=0;i<=5;i++)
// {
//     for(let k=1;k<=i;k++)
//     {
//     str=str.concat(' ')
//     str=str.concat('*'+' ')
// }
// str=str.concat('\n')
// }
// console.log(str)
// function printPyramid() {
// 	var numberofRows =10;
// 	var outputBlock="";
// 	for (var i = 1; i <= numberofRows; i++) {
// 		for (var j = 1; j <= i; j++) {
// 			outputBlock+=j + "     ";
// 		}
// 		console.log(outputBlock);
// 		outputBlock="";
// 	}
// }
var i, j, k=2*n-2;

var n = 5;

for (i=0; i<n; i++) {

for(j=1; j<k; j++) {

    console.log(" ");

}

k=k-1;

for(j=1; j<=i; j++) {

    console.log("* ");

}

console.log('\n')

}
// console.log(todo)
// const filterr=function(set){
//     return set.filter(function(item)
//     {
//          return !item.completed
//     })
// }
// console.log(filterr(todo))
// const deletetodo=function(todo,text)
// {
//     const index=todo.findIndex(function(item)
//     {
//         return item.text.toLowerCase()===text.toLowerCase()

//     })
//     if(index>-1)
//     {
//     todo.splice(index,1)
// }}
// deletetodo(todo,'t1')
// console.log(todo)


