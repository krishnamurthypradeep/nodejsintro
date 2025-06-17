import fs from 'fs'

const readFile = (fileName: string): string=> {
    //fs.readFileSync()
   return fs.readFileSync(fileName).toString()
}
console.log(readFile('data'))
console.log('Outside Readfile')