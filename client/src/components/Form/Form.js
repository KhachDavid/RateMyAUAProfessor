import React, {useState, useEffect} from "react";

import useStyles from "./styles";
import FileBase64 from 'react-file-base64';
import {useDispatch, useSelector} from "react-redux";

import {Button, Paper, TextField, Typography} from "@mui/material";
import {createProfessor, updateProfessor} from "../../actions/posts";


const Form = ({currentId, setCurrentId}) => {
    const [profesorData, setProfesorData] = useState({fullName: '', courses: '', imageFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const profesor = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (profesor) setProfesorData(profesor)
    }, [profesor])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateProfessor(currentId, profesorData));
        } else {
            dispatch(createProfessor(profesorData));
        }
        clearAll();
    }

    const clearAll = () => {
        setCurrentId(null);
        setProfesorData({fullName: '', courses: '', imageFile: ''})
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">{!currentId ? 'Add a' : 'Edit'} Professor</Typography>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        fullWidth
                        value={profesorData.fullName}
                        onChange={(e) => setProfesorData({...profesorData, fullName: e.target.value})}
                    />
                    <TextField
                        name="courses"
                        variant="outlined"
                        label="Courses"
                        fullWidth
                        value={profesorData.courses}
                        onChange={(e) => setProfesorData({...profesorData, courses: e.target.value})}
                    />
                    <div className={classes.fileInput}>
                        <FileBase64
                            type='file'
                            multiple={false}
                            onDone={({base64}) => setProfesorData({...profesorData, imageFile: base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="container" size="large" type="submit" fullWidth>
                        Add
                    </Button>

                    <Button variant="contained" color="secondary" size="small" onClick={clearAll}>
                        Clear all fields
                    </Button>

                </form>
            </Paper>
        </div>
    )
}

export default Form;