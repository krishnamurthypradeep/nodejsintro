
import mongoose,{Document} from "mongoose";
export interface IProduct extends Document{
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}