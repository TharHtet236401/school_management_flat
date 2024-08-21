import mongoose, { STATES } from "mongoose";    

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    schools: {
        type: [String],
        
    },
    classes:{
        type: [String],
        
    },
    childern:{
        type: [mongoose.Schema.Types.ObjectId], // Updated to reference ObjectId
        ref: 'Student'
    },
    roles: {
        type: [String],
        enum: ['admin', 'teacher', 'guardian'], // Added enum for specific roles
        
    },
    relation: {
        type: [String],
        enum: ['father', 'mother', 'guardian'], // Added enum for specific roles
        
    }
});

const User = mongoose.model('User', userSchema);

export default User;