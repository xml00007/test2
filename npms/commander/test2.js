const program = require('commander');
program
.version('0.1.0')
.option('-s --size [size]', 'Pizza size', /^(large|medium|small)$/i, 'medium')
.option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
.parse(process.argv);

console.log(' size: %j', program.size);
console.log(' drink: %j', program.drink);