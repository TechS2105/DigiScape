import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// router block
app.use(router);

app.listen(PORT, () => {

    console.log(`Server is started on ${PORT} port`);

})