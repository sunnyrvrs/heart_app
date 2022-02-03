import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import newsRoutes from './routes/news.js';

import cors from 'cors';

const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use('/news', newsRoutes);

const CONNECTION_URL = 'mongodb+srv://sunny:sunny@cluster0.reycb.mongodb.net/heart?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
