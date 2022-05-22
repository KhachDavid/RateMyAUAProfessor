import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    fullName: String,
    rating: {
        type: Number,
        default: 0
    },
    countOfRatings: {
        type: Number,
        default: 0
    },
    courses: [String],
    imageFile: String
});

const PostItem = mongoose.model('PostItem', postSchema)

export default PostItem;