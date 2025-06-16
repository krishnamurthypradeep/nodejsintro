export default abstract class Shape{
    constructor(public width: number, public height: number){
       
    }

    abstract area(): number
}