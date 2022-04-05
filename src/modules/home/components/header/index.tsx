import React, {FC} from 'react';

import iconLogo from 'assets/icons/logo.svg';

import './index.css';

const Header: FC = () => (
  <header className="header">
    <div className="header__logo-bg" />

    <img className="header__logo" src={iconLogo} alt="Habi logo" />
  </header>
);

export default Header;
