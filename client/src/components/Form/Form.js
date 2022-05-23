import React, { useState, useEffect } from "react";

import useStyles from "./styles";
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";

import { Button, Paper, TextField, Typography } from "@mui/material";
import { createProfessor, updateProfessor } from "../../actions/professors";


const Form = ({ currentId, setCurrentId }) => {
    const [professorData, setProfessorData] = useState({ fullName: '', courses: '', imageFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const professor = useSelector((state) => currentId ? state.professors.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (professor) setProfessorData(professor)
    }, [professor])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateProfessor(currentId, professorData));
        } else {
            dispatch(createProfessor(professorData));
        }
        clearAll();
    }

    const clearAll = () => {
        setCurrentId(null);
        setProfessorData({ fullName: '', courses: '', imageFile: '' })
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6" style={{
                        paddingBottom: '10px',
                    }}>{!currentId ? 'Add a' : 'Edit'} Professor</Typography>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        fullWidth
                        value={professorData.fullName}
                        onChange={(e) => setProfessorData({ ...professorData, fullName: e.target.value })}
                        style={{
                            paddingBottom: '10px',
                        }}
                    />
                    <TextField
                        name="courses"
                        variant="outlined"
                        label="Courses"
                        fullWidth
                        value={professorData.courses}
                        onChange={(e) => setProfessorData({ ...professorData, courses: e.target.value })}
                        style={{
                            paddingBottom: '10px',
                        }}
                    />
                    <div className={classes.fileInput}>
                        <FileBase64
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setProfessorData({ ...professorData, imageFile: base64 })}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="container" size="large" type="submit" style={{backgroundColor: "#1976d2", color: 'white', marginBottom: '10px'}} fullWidth>
                        Submit
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