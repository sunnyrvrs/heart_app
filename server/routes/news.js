import express from 'express';
import { getNews } from '../controllers/news.js';

const newsRoutes = express.Router();

newsRoutes.get('/', getNews);

export default newsRoutes;