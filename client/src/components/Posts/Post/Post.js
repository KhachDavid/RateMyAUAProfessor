import React from "react";
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete'
//import EditIcon from '@mui/icons-material/Edit'
import CourseList from "./CourseContainers/CourseList";
import useStyles from '../Post/styles';
import { useDispatch } from "react-redux";
import { deleteProfessor, rateProfessor } from "../../../actions/posts";
import { Rating } from 'react-simple-star-rating'


const Post = ({ post, setCurrentId }) => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const handleRating = (rate) => {
        dispatch(rateProfessor(post._id, rate));
    }

    return (
        <li className={styles.parentLi}>
            <div>
                <img src={post.imageFile} alt="Image Not Found" className={styles.img} />
            </div>
            <div id={styles.texts}>
                <div className={styles.name}>
                    {post.fullName}
                </div>
                <CourseList courses={post.courses} />
                <div className={styles.rating}>
                    {defineColor(post.rating)}
                </div>
                <div>
                    <Rating onClick={handleRating} ratingValue={post.countOfRatings} /* Available Props */ />
                </div>
                <div className={styles.ratingCount}>
                    number of ratings: {post.countOfRatings}
                </div>
            </div>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                    Edit
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deleteProfessor(post._id))}>
                    Delete
                </Button>
            </CardActions>
        </li>
    )

    function defineColor(rating) {
        // take the first three digits of the rating
        if (rating >= 8) {
            return (
                <span className={styles.above8}>{"Average rating: " + rating.toString().slice(0, 3)}</span>
            )
        } else if (rating >= 5) {
            return (
                <span className={styles.above5}>{"Average rating: " + rating.toString().slice(0, 3)}</span>
            )
        } else if (rating >= 0) {
            return (
                <span className={styles.above0}>{"Average rating: " + rating.toString().slice(0, 3)}</span>
            )
        }
    }
}


export default Post;