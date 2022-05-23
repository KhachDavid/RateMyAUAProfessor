import React, {useState, useEffect} from "react";
import {Container, AppBar, Typography, Toolbar, Button} from '@mui/material'
import auaLogo from './images/aua_logo.png'
import {useDispatch} from "react-redux";
import useStyles from "./styles";
import {BrowserRouter, Route, Routes, Link, useNavigate} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">
                        <img className={classes.image} src={auaLogo} alt="AUA Logo" height="60"/>
                        Rate My AUA Professor
                    </Typography>
                    <Toolbar>
                        {user ? (
                            <div>
                                <h6>{user.result.name}</h6>
                                <Routes>
                                    <Route path="/" exact element={
                                        <Button color="secondary" onClick={logout}>Log Out</Button>
                                    }>
                                    </Route>
                                </Routes>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="secondary">Log In</Button>
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
