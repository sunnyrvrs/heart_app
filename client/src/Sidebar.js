import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Sidebar() {

  const [news, setNews] = useState({});

  async function fetchNews() {
    const response = await fetch('http://localhost:5000/news', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => {
      res.json().then(j => {
        console.log(j);
        console.log('hi');
      })
    });
  }

  useEffect(() => {
    fetchNews();
    // console.log(news);
  }, []);

  return (
      <div className="sidebar">
        <div className="sidebar__items">
          <div className="sidebar__item">
            <NewspaperIcon className="icon"/>
            <p>Messages</p>
          </div>
          <div className="sidebar__item">
            <CelebrationIcon className="icon"/>
            <p>Events</p>
          </div>
          <div className="sidebar__item sidebar__flag--div">
            <img className="sidebar__flag" src="https://img.icons8.com/color-glass/48/000000/lgbt-flag.png"/>
            <p>LGBTQ News</p>
          </div>
          <div className="news__div sidebar__item">
            <div className="news__item">
              <p>News here</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;
