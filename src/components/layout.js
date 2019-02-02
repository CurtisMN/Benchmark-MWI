import React, { Fragment } from 'react';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
      <main>{children}</main>
  </Fragment>
);

export default Layout;
