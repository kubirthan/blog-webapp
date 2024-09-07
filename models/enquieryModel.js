import { model, models, Schema } from "mongoose";
import { type } from "os";

const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const enquiryModel = models.Enquiry  || model('Enquiry', enquirySchema)

export default enquiryModel