import React from "react";
import {CardActions, Button} from '@mui/material'
import CourseList from "./CourseContainers/CourseList";
import useStyles from '../Professor/styles';
import {useDispatch} from "react-redux";
import {deleteProfessor, rateProfessor} from "../../../actions/professors";
import {Rating} from 'react-simple-star-rating'


const Professor = ({professor, setCurrentId}) => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const handleRating = (rate) => {
        dispatch(rateProfessor(professor._id, rate));
    }

    return (
        <li className={styles.parentLi}>
            <div>
                <img src={professor.imageFile} alt="Image Not Found" className={styles.img}/>
            </div>
            <div id={styles.texts}>
                <div className={styles.name}>
                    {professor.fullName}
                </div>
                <CourseList courses={professor.courses}/>
                <div className={styles.rating}>
                    {defineColor(professor.rating)}
                </div>
                <div>
                    <Rating onClick={handleRating} ratingValue={professor.countOfRatings} /* Available Props */ />
                </div>
                <div className={styles.ratingCount}>
                    number of ratings: {professor.countOfRatings}
                </div>
            </div>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(professor._id)}>
                    Edit
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deleteProfessor(professor._id))}>
                    Delete
                </Button>
            </CardActions>
        </li>
    )

    function defineColor(rating) {
        // take the first three digits of the rating
        if (rating >= 4) {
            return (
                <span className={styles.above8}>{"Average rating: " + rating.toString().slice(0, 3)}</span>
            )
        } else if (rating >= 2.5) {
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


export default Professor;