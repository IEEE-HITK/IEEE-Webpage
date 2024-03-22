import mongoose from 'mongoose';
const { Schema } = mongoose;

const comSchema = new Schema({
    Name: {
        type: String,
        required: true,  
    },
    Post: {
        type: String,
        required: true,
    },
    Li: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Tw: {
        type: String,
        required: true,
    },
    Gm: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Coms || mongoose.model('Coms', comSchema) ;
