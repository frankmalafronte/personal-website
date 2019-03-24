import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';

const Settlers = () => (
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
          <h1 className="title is-size-1 is-centered">Settlers of Fullstack</h1>
         Hello
          <br />
          <br />
          <a className="text is-size-5" href="http://settlers-of-fullstack.herokuapp.com">
            settlers-of-fullstack.herokuapp.com
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/Interactive-NYC/Settlers-Of-Catan'>
            src code
          </a>
          
        </div>
      </div>
    </div>
  </section>
);

export default Settlers;