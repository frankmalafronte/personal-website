import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';

const Stacktimer = () => (
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
          <h1 className="title is-size-1 is-centered">Stacktimer</h1>
          Stacktimer is a time management application I built during Fullstack Academy's "Stackathon."
          Users can set a timer when they start a task, and when it is completed add that time as well 
          as other information to their database. That database is analyzed by the application's tools 
          to help the user get a better picture of how they spend their time.
          <br />
          <br />
          <a className="text is-size-5" href="stacltimer.herokupapp.com">
            stacktimer.herokuapp.com
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/frankmalafronte/Timer'>
            source code
          </a>
          
        </div>
      </div>
    </div>
  </section>
);

export default Stacktimer;