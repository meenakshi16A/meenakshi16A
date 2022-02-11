const path =require('path')

console.log(path.sep)

const filepath=path.join('/context/','subfolder','text.txt')
console.log(filepath);

const base =path.basename(filepath)
console.log(base);

const absolute= path.resolve(__dirname,'context','subfolder','text.txt')
console.log(absolute);