import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';

const DFS = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <Link to="/#projects">
          <button
            type="button"
            className="button is-outlined is-primary is-medium"
          >
            <FaChevronLeft />
          </button>
        </Link>
        <div className="column is-three-quarters is-size-5">
          <h1 className="title is-size-1 is-centered">DFS Charts</h1>
         DFS Charts is a data analysis tool for Daily Fantasy Sports. Users
         can search for any active player using an search bar featuing auto 
         suggest, then view multiple data points and graphs to help them 
         choose the best lineups.
         <br />
        <br />
        I chose to work on this project in order to learn web scraping, the process
        of extracting data from websites. Sports data, while widely available on the internet,
        is not available via an API. To create my own database, I built a recursive web 
        scraper to collect the needed data. I also coded a cron job that will scrape each new day's data
          <br />
          <br />
          <a className="text is-size-5" href="http://dfs-charts.herokuapp.com">
            dfs-charts.herokuapp.com
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/frankmalafronte/DFS-Charts/blob/master/server/multiDayScaper.js'>
            Source code for Recursive Scraper
          </a>
          
          
          
        </div>
      </div>
    </div>
  </section>
);

export default DFS;