import React from 'react';
import './styles/header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default ({ name }) => {
  return (
    <div className="header">
      <a href="#" className="menu--link">
        <MenuIcon className="menu--icon" />
      </a>
      <div className="title--wrapper">
        <h1 className="title--text">MFLIX</h1>
        <span className="title--name">by {name}</span>
      </div>
      <div className="actions--wrapper">
        <div className="actions--notifications">
        <a href="#" className="actions--notifications__link"><NotificationsIcon /></a>
      </div>
      </div>
    </div>
  )
};
