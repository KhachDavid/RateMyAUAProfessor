import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import professorRoutes from './routes/professors.js';
import userRoutes from './routes/users.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/professors', professorRoutes);
app.use('/user', userRoutes);


const CONNECTION_URL = "mongodb+srv://armenarmenakyan:amosh2002@cluster0.hmco8.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 42069;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

