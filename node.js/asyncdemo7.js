const performLongRunningTask= () =>{
    for(let i=0;i<1000;i++){
        console.log(i)
    }
    console.log('after long for loop')
}
console.log('Begin')
performLongRunningTask()
console.log('Comepleted')