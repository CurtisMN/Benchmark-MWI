import React from 'react';

import Layout from '../components/layout';
import '../components/index.css';
import Column from '../components/column';

const IndexPage = () => (
  <Layout>
    <h1>HEADING ONE</h1>
    <div className='wrapper'>
      <div className='col1'>
        <Column />
      </div>
      <div className='col2'>
        <Column />
      </div>
      <div className='col3'>
        <Column />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
