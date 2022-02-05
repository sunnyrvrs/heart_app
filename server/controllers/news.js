import axios from 'axios';

var options = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q: 'LGBTQ', lang: 'en'},
  headers: {
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': 'c9680064f4msh9bc79a5e1a67255p1d63dejsn5278b3562cb2'
  }
};

export const getNews = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try { 
        axios.request(options).then(function (response) {
            res.send(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    } catch (error) {
        console.log(error);
    }

    
}