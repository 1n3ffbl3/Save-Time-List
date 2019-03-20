import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.navItem}>
				<NavLink
					exact
					className={styles.navItemLink}
					to="/">grocery list
				</NavLink>
				<NavLink
					className={styles.navItemLink}
					to="/checkout">check-out list
				</NavLink>
				<NavLink
					className={styles.navItemLink}
					to="/thingstosee">things to see
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default HeaderNav;