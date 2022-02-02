import axios from 'axios';

export const getNews = async (req, res) => {
    try { 
        const query = res['req']['body']['searchterm'];

        const APIKEY = `pub_42256ee20a0e3e8ca810a3146a66cf29fdf4`;

        const data = await axios.get(`https://newsdata.io/api/1/news?apikey=${APIKEY}&q=${query}&language=en&country=us`);

        console.log(data['data']);

        res.json(data['data'][0]);

    } catch (error) {
        console.log(error);
    }
}