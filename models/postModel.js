import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    created_at:String
}, { toJSON: {virtuals: true}})

postSchema.virtual('short_description').get(function(){
    return this.description.substr(0,50)+'...'
})

postSchema.virtual('created_at_format').get(function(){
    return changeDateFormat(this.created_at)
})

function changeDateFormat(date_str){
    const date = new Date(date_str)
    const months = ["January","february","March","April","May","June","July","August","Sepetmber","october","november","December"]

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const postModel = models.Post ||  model('Post', postSchema)

export default postModel