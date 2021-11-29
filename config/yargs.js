const argv = require('yargs')
                    .options( 'b', { 
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base table for multiply'
                    })
                     .options( 'l', { 
                        alias: 'list',
                        type: 'boolean',
                        default: false,
                        describe: 'Show Table in console'
                    })
                     .options( 'u', { 
                        alias: 'until',
                        type: 'number',
                        default: 10,
                        describe: 'how far I want to multiply?'
                    })
                    .check( (argv, options) => {
                       if( isNaN( argv.b ) || isNaN( argv.u ) ){
                           throw 'The base must be a number ';
                       }
                       return true;
                    })
                    .argv;
module.exports = argv;
