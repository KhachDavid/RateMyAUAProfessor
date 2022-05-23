import React, {useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid, Toolbar, Avatar, Button} from '@mui/material'
import auaLogo from './images/aua_logo.png'
import {useDispatch} from "react-redux";
import useStyles from "./styles";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    const user = null;

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                        <img className={classes.image} src={auaLogo} alt="AUA Logo" height="60"/>
                        Rate My AUA Professor
                    </Typography>
                    <Toolbar>
                        {user ? (
                            <div>
                                {/*<img alt="Couldn't load" src={user.result.imageUrl}/>*/}
                                {/*<h6>{user.result.name}</h6>*/}
                                <Button color="secondary">Log Out</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" color="secondary">Log In</Button>
                        )
                        }

                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
