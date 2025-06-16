import Rectangle from "./rectangle";
import Shape from "./shape";

class Main{
    static display(shape: Shape): void{
        console.log(`Area of ${shape} is ${shape.area()}`)
    }
}

Main.display(new Rectangle(23.4,34.5))