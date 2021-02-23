import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => (
		<header className="site_container header">
			<Link to="/">
				<h1>
					<img src={Logo} alt="logo" />
				</h1>
			</Link>
		</header>
);
export default Header;
