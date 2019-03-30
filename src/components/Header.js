import React from 'react'
import './style.scss'
import Email from './Email'
import Resume from './Resume'

const Header = () => (
  <section className="hero gradientBg is-halfheight-with-navbar">
    <div className="hero-body">
      <div className="container left">
        <article className="media">
          <div className="media-content">
            <div className="content column is-half" >
              <h1 className="title is-size-1">Frank Malafronte</h1>
              <p className="subtitle is-size-3">
                Hi! I'm a full stack developer. I enjoy
                building software with tools like React, Redux, Gatsby, GraphQL, & Puppeteer. 
              </p>
              <Resume />
              <Email />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
)
export default Header
