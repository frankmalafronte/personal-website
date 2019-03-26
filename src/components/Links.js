
    
import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Midsection = () => (
  <div>
    <section className="section">
      <div className="container" id="projects">
        <h1 className="title is-size-1">Projects</h1>
        <div className="columns is-multiline">
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Link to="/DFS">
                    <h2 className="title is-size-4">DFS Charts</h2>
                  </Link>
                  <p className="subtitle is-size-5">
                  A suite of helpful data for playing Daily Fantasy sports 
                  using a custom recursive web scraper.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Link to="/SettlersofFullstack">
                    <h2 className="title is-size-4">Settlers of Fullstack</h2>
                  </Link>
                  <p className="subtitle is-size-5">
                  A fully digital port of the popular board game Settlers of Catan
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Link to="/Codingbooks">
                    <h2 className="title is-size-4">Coding Books</h2>
                  </Link>
                  <p className="subtitle is-size-5">
                  A functional E-commerce website for selling coding books

                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <a href="/Stacktimer">
                    <h2 className="title is-size-4">Stack Timer</h2>
                  </a>
                  <p className="subtitle is-size-5">
                    A time management application developed in four days as part of Fullstack Academy's "Stackathon"
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Midsection