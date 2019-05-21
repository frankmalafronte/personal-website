import React from 'react';

import './style.scss';
import Helmet from './Helmet';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Links />
    <Footer />
  </div>
);

export default Layout;


