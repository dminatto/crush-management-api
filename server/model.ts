import * as mongoose from "mongoose";


const CrushSchema = new mongoose.Schema({
    name: {type: String, required: true},
    alias:  {type: String, required: true},
    typeSource: {type: Number, required:true},
    nameSource: {type: String},
    note: {type: String},
    rating: {type: Number, required:true},
    createdAt: {type: Date, default:Date.now}
})

export default mongoose.model('Crush', CrushSchema);