import React, {FC} from 'react';

import iconLogo from 'assets/icons/logo.svg'

import './index.css';

const Header: FC = () => (
  <div className="header">
    <div className="header__logo-bg" />

    <img className="header__logo" src={iconLogo} alt="Habi logo" />
  </div>
);

export default Header;
