import ProfessorItem from "../models/professorDataMessage.js";
import mongoose from "mongoose";

export const getProfessors = async (req, res) => {
    try {
        const professorMessages = await ProfessorItem.find();
        console.log(professorMessages);
        res.status(200).json(professorMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createProfessor = async (req, res) => {
    const professor = req.body;
    const newProfessor = new ProfessorItem(professor);
    try {
        await newProfessor.save();
        res.status(201).json(newProfessor);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateProfessor = async (req, res) => {
    const {id: _id} = req.params;
    const professor = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No instructor found with that id');

    const updatedProfessor = await ProfessorItem.findByIdAndUpdate(_id, {...professor, _id}, {new: true});
    res.json(updatedProfessor)
}

export const rateProfessor = async (req, res) => {
    const {id} = req.params;

    if (!req.userId) return res.json({message: 'Not Authenticated!'});

    // read the request body
    const newRating = req.body;

    // get the first key of newRating object
    const newRatingKey = Object.keys(newRating)[0];

    // convert it to a number out of 5 currently it is out of 100
    const newRatingValue = (newRatingKey / 100) * 5;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No instructor found with that id');

    const professor = await ProfessorItem.findById(id);

    const updatedProfessor = await ProfessorItem.findByIdAndUpdate(id, {
        rating: await getCalculatedRating(newRatingValue, professor.rating, professor.countOfRatings),
        countOfRatings: professor.countOfRatings + 1
    }, {new: true});

    res.json(updatedProfessor)
}

export const deleteProfessor = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No instructor found with that id');

    await ProfessorItem.findByIdAndRemove(id);
    res.json({message: 'Deleted!'});
}

async function getCalculatedRating(newRating, curRating, ratingCount) {
    if (ratingCount === 0) {
        return newRating;
    } else {
        return ((curRating * ratingCount + newRating) / (ratingCount + 1));
    }
}
