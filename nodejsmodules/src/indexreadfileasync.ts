import fs from 'fs'

const readFile = (fileName: string, cb: Function)=> {
    //fs.readFileSync()
    fs.readFile(fileName,(err,data)=>{
        if(err){
            return cb(err)
        }
        const lines = data.toString().trim().split('\n')
        cb(null,lines)
    })
}
readFile('data',(err:NodeJS.ErrnoException | null,lines: string)=>{
    if(err) console.error(err.message)
        console.log(lines)
})
console.log('Outside Readfile')