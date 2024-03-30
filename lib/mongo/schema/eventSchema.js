import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
    Name: {
        type: String,
        required: true,  
    },
    Venue: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
    EventDetails: {
        type: String,
        required: true,
    },
    EventBanner: {
        type: String,
        required: true,
    },
    EventGallery: [String],
    EventType: {
        type: String,
        required: true,
    },
    Speaker: [
        {
            SpeakerName: {
                type: String,
                required: false,
            },
            SpeakerDetails: {
                type: String,
                required: false,
            },
            SpeakerImage: {
                type: String,
                required: false,
            }   
        }
    ]
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema) ;
