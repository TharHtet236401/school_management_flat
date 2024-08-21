import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    poster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    contentPicture: {
        type: String,
    },
    contentType:{
        type: String,
        enum: ['announcement','feed'],
        required: true
    },
    school: {
        type: [String],
        required: true
    },
    reactions: {
        type :Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;