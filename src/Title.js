import React from 'react';
import './styles/header.scss';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';

export default ({ name }) => {
  return (
    <div className="header">
      <a href="#" className="menu--link">
        <HamburgerIcon className="menu--icon" width="30px" height="30px" />
      </a>
      <div className="title--wrapper">
        <h1 className="title--text">MFLIX</h1>
        <span className="title--name">by {name}</span>
      </div>
      <div className="actions--wrapper">
        <div className="actions--notifications">
          <a href="#" className="actions--notifications__link">
            <BellIcon width="30px" height="30px" />
          </a>
        </div>
      </div>
    </div>
  );
};
