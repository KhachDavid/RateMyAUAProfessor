import PostItem from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostItem.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostItem(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No instructor found with that id');

    const updatedPost = await PostItem.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost)
}

export const rateProfessor = async (req, res) => {
    const {id} = req.params;

    // read the request body 
    const newRating = req.body;

    // get the first key of newRating object
    const newRatingKey = Object.keys(newRating)[0];

    // convert it to a number out of 5 currently it is out of 100
    const newRatingValue = (newRatingKey / 100) * 5;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No instructor found with that id');

    const post = await PostItem.findById(id);
    const updatedPost = await PostItem.findByIdAndUpdate(id, {
        rating: await getCalculatedRating(newRatingValue, post.rating, post.countOfRatings),
        countOfRatings: post.countOfRatings + 1
    }, {new: true});

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No instructor found with that id');

    await PostItem.findByIdAndRemove(id);
    res.json({message: 'Deleted!'});
}

async function getCalculatedRating(newRating, curRating, ratingCount) {
    if (ratingCount === 0) {
        return newRating;
    } else {
        return ((curRating * ratingCount + newRating) / (ratingCount + 1));
    }
}
