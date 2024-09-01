import { Model, Schema } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String
})

const postModel = Model('Post', postSchema)

export default postModel