import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.navItem}>
				<NavLink>

				</NavLink>
			</li>
		</ul>
	</nav>
);

export default HeaderNav;