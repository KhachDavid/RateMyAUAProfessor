import mongoose from 'mongoose';

const professorSchema = mongoose.Schema({
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

const ProfessorItem = mongoose.model('ProfessorItem', professorSchema)

export default ProfessorItem;