import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
        <ul>
            <li><Link to='/'>Домой</Link></li>
            <li><Link to='/sandbox'>Песочница</Link></li>
        </ul>
);

export default Header;
