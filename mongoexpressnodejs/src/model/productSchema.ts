
import mongoose,{Model, Schema} from 'mongoose'
import { IProduct } from './product'

const productSchema:Schema<IProduct>  = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    name: {
       type: mongoose.Schema.Types.String,
        required: true
    },
    price: {
       type: mongoose.Schema.Types.Number,
        required: true,
        min: 1000,
        max: 100000
    },
},
    {
        timestamps: true
       
    }
)
// Decorator Pattern

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product',productSchema)
// create
// retreive
// update
// delete
// find