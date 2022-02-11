const os = require('os')
//info about current user
const user=os.userInfo()
console.log(user);

//method returns the system uptime in secands

console.log(`The system upytime is ${os.uptime}`)

const currentos =
{
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),

}
console.log(currentos);