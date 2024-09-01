import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String
})

const postModel = models.Post ||  model('Post', postSchema)

export default postModel