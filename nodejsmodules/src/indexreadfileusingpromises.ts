import fs from 'fs/promises'

const readFile = async(fileName: string)=> {
    //fs.readFileSync()
  return await fs.readFile(fileName)
   
}


// IIFE
(async ()=>{
try {
   const data = await readFile('data')
    console.log(data.toString())
}
 catch (err) {
    const error =err as NodeJS.ErrnoException
    console.error(error.message)
}
})()

console.log('Outside Readfile')