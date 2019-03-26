import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';
import SettlersImg from '../images/Settlers.png'

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
            Settlers of Fullstack is a fully functional digital port of the popular
            board game Settlers of Catan. Socket.io, React, Redux and advanced 
            CSS skills were all heavily used. 
          <br />
          <br />
          <a className="text is-size-5" href="http://settlers-of-fullstack.herokuapp.com">
            settlers-of-fullstack.herokuapp.com
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/Interactive-NYC/Settlers-Of-Catan'>
            source code
          </a>
          
        </div>
      </div>
      <img src={SettlersImg}/>
    </div>
  </section>
);

export default Settlers;