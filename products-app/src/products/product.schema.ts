// prettier-ignore
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// prettier-ignore
@Schema({collection: 'products'})
// prettier-ignore
export class Product{
// prettier-ignore
    @Prop({required:true,unique:true})
// prettier-ignore
    name: string
// prettier-ignore  
    @Prop({required:true,unique:true,min:1000,max:10000})
    price: number
// prettier-ignore      
    @Prop({default:Date.now})
    createdAt: Date;
// prettier-ignore      
}
export const ProductSchema = SchemaFactory.createForClass(Product);
