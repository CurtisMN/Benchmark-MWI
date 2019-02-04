import React from 'react';

const Header = () => (
  <header
    style={{
      borderBottom: `3px solid black`,
    }}
  >
    <div
      style={{
        paddingTop: `10px`,
        paddingBottom: `10px`,
      }}
    >
      <img
        src={require('../images/mwi-logo-horizontal.png')}
        alt='headerimage'
        style={{
          display: `block`,
          margin: `auto`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxHeight: '70px',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      />
    </div>
  </header>
);

export default Header;
