import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaSoundcloud,
  FaInstagram,
  FaMixcloud,
} from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center">
        <div className="content has-text-centered">
          <article className="media center">
            <span className="icon">
              <a href="https://github.com/frankmalafronte">
                <FaGithub size="30px" color="black" />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a href="https://www.linkedin.com/in/frank-malafronte/">
                <FaLinkedin size="30px" color="black" />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a href="https://www.instagram.com/frankmalafronte/">
                <FaInstagram size="30px" color="black" />
              </a>
            </span>
            &nbsp;
          </article>
          &nbsp;
          <p className="is-size-5">
            Built with <a href={data.site.siteMetadata.gatsby}>Gatsby</a> &{' '}
            <a href={data.site.siteMetadata.bulma}>Bulma</a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
