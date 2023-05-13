import {Schema, model, models } from "mongoose";

const DeclarationSchema = new Schema({
    creator: {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    declaration: {
        type : String,
        required : [true, 'Declare Something Please']
    },
    tag : {
        type: String,
        required : [true, 'Enter hashtag']
    }
});

export default models.Declaration || model('Declaration', DeclarationSchema);