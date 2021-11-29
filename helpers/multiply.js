const fs = require('fs')
let colors = require('colors/safe');
const createFile = async (base = 5, list = false, until = 10) => {
  try {
    let output = ''
    for (let index = 1; index <= until; index++) {
      output += `${base} x ${index} = ${base * index}\n`
    }
    fs.writeFileSync(`./output/table-${base}.txt`, output)
    if (list) {
      console.log(colors.rainbow( '======================' ));
      console.log('     ' + colors.italic('Base is: ' + base) );
      console.log(colors.rainbow( '======================' ));
      console.log(colors.rainbow( output ));
    }
  } catch (err) {
    throw err
  }
}
module.exports = {
  createFile
}
