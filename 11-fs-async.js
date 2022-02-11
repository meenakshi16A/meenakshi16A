const { readFile,  writeFile } = require('fs')
 readFile ('./context/first.txt','utf8',(err,result)=>
{
if(err)
{
console.log(err);
}
const first =result;
readFile ('./context/secand.txt','utf8',(err,result)=>
{
if(err)
{
console.log(err);
}
const secand =result;
writeFile('./context/result-sync.txt',`here is the result : ${first}, ${secand}`,(err,result)=>
{
    if(err)
    {
    console.log(err);
    }
    console.log(result);  
})
})
})