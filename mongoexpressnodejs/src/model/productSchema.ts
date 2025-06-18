
import mongoose,{Model, Schema} from 'mongoose'
import { IProduct } from './product'

const productSchema:Schema<IProduct>  = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    name: {
       
        required: true
    },
    price: {
       
        required: true,
        min: 1000,
        max: 100000
    },
},
    {
        timestamps: true,
         versionKey: true
    }
)
// Decorator Pattern

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product',productSchema)
// create
// retreive
// update
// delete
// find