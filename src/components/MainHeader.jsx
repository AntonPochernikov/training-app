import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li><Link to='/home'>Домой</Link></li>
    <li><Link to='/sandbox'>Песочница</Link></li>
  </ul>
);

export default Header;
