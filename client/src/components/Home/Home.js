import React, {useEffect, useState} from 'react'
import {Container, Grid, Grow} from "@mui/material";
import Professors from "../Professors/Professors";
import Form from "../Form/Form";
import {useDispatch} from "react-redux";
import {getProfessors} from "../../actions/professors";

const Home = (user) => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProfessors());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Professors setCurrentId={setCurrentId}/>
                    </Grid>
                    {console.log(user)}
                    {user ?
                        (<Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>) : null
                    }
                </Grid>
            </Container>
        </Grow>
    )
};

export default Home;
