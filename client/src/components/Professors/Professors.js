import Professor from './Professor/Professor'
import React from "react";
import {Grid, CircularProgress} from '@mui/material'
import {useSelector} from "react-redux";

import useStyles from "./styles";

const Professors = ({setCurrentId}) => {
    const professors = useSelector((state) => state.professors)
    const classes = useStyles();

    console.log(professors);

    return (
        !professors.length ? <CircularProgress/> : (
            <Grid className={classes.ul} container alignItems="stretch" spacing='3'>
                {professors.map((professor) => (
                    <Grid key={professor._id} item>
                        <Professor professor={professor} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Professors;