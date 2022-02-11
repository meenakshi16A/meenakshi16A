const { readFileSync,  writeFileSync } = require('fs')
const first = readFileSync('./context/first.txt','utf8')
const secand = readFileSync('./context/secand.txt','utf8')

console.log(first,secand)
writeFileSync('./context/result-sync.txt',`here is the result : ${first}, ${secand}`,{ flag:'a'})