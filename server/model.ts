import * as mongoose from "mongoose";


const CrushSchema = new mongoose.Schema({
    photo: {type: String},
    name: {type: String, required: true},
    shipp: {type: String},
    alias:  {type: String, required: true},
    typeSource: {type: Number, required:true},
    nameSource: {type: String},
    note: {type: String},
    quote: {type: String},
    rating: {type: Number, required:true},
    createdAt: {type: Date, default:Date.now}
})

export default mongoose.model('Crush', CrushSchema);