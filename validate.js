let isvalidate=function(pass){
 return pass.length>=8&&!pass.includes('password')
}
console.log(isvalidate('jadhjkasdhjkdhjkad'))
console.log(isvalidate('password'))
console.log(isvalidate('hshsh'))