import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    Email: {
        type: String,
        required: true,  
    },
    Auth: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema) ;
