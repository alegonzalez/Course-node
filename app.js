
const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

                    
//let base = 3;
//console.log(process.argv);
//const [,,argv3 = 'base=3'] = process.argv;
//const [, base=3 ] = argv3.split('=');
//console.log(process.argv);


createFile( argv.b , argv.l, argv.u )
.then(msg => console.log(`The file table-${argv.base} was successfully created`))
.catch(err => console.log(`Error when try to create file with table-${argv.base} `));


