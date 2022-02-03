import axios from 'axios';

export const getNews = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try { 
        const query = res['req']['body']['searchterm'];

        const APIKEY = `pub_42256ee20a0e3e8ca810a3146a66cf29fdf4`;

        const data = await axios.get(`http://newsdata.io/api/1/news?apikey=${APIKEY}&q=${query}&language=en&country=us`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        res.send(data['data']);

    } catch (error) {
        console.log(error);
    }

    
}