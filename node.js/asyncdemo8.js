
const performLongRunningTask= (total,size=999) =>{
    let count =0
    function perform(){
    for(let i=0;i<size && count<total;i++){
       count++
    }
    if(count < total){
        setImmediate(perform)
    } else{
        console.log('after long for loop')
    }
}
perform()
}
console.log('Begin')
performLongRunningTask(1001)
console.log('Completed')