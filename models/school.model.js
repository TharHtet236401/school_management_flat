import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    classes: {
        type: [mongoose.Schema.Types.ObjectId], // Updated to reference ObjectId
        ref: 'Class'
    }
   
});

const School = mongoose.model('School', schoolSchema);

export default School;