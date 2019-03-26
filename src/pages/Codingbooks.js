import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import  '../components/style.scss';
import codingBooks from '../images/codingBooks.png'

const CodingBooks = () => (
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
          <h1 className="title is-size-1 is-centered">CodingBooks</h1>
          Coding Books is a fully functional E-commerce website built on React, Redux, Node & PostgreSQL. 
          <br />
          <br />
          <a className="text is-size-5" href="http://codingbooks.herokuapp.com">
            codingbooks.herokuapp.com
          </a>
          <br />
        </div>
      </div>
      <img src={codingBooks}/>
    </div>
  </section>
);

export default CodingBooks;