import React, {FC} from 'react';

import './index.css';

const Header: FC = () => (
  <div className="header">
    <div className="header__logo-bg" />
    <img className="header__logo" src="/assets/icons/logo.svg" alt="Habi logo" />
  </div>
);

export default Header;
