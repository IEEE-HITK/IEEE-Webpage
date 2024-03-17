import mongoose from 'mongoose';
const { Schema } = mongoose;

const testimonialSchema = new Schema({
    Name: {
        type: String,
        required: true,  
    },
    Message: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Testimonials || mongoose.model('Testimonials', testimonialSchema) ;
