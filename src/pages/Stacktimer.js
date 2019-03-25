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
          Stacktimer is a time management application I bu
          <br />
          <br />
          <a className="text is-size-5" href="stacltimer.herokupapp.com">
            stacktimer.herokuapp.com
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/frankmalafronte/Timer'>
            src code
          </a>
          
        </div>
      </div>
    </div>
  </section>
);

export default Stacktimer;