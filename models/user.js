import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    email : {
        type: String,
        unique: [true, 'Email Exists'],
        required: [true, 'Email Required']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: String,
})

export default models.User || model("User", userSchema);