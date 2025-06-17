
console.log('start')

setTimeout(()=>{
    console.log('Inside setTimeout')
},1000)

// is scheduled after the IO event callbacks
setImmediate(()=>{
    console.log('Set Immediate')
})

console.log('End')