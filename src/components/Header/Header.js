import React from 'react';
import styles from './Header.module.scss';
import Button from '../../components/Button/Button';
import HeaderNav from './HeaderNav';

const Header = ({ openFn }) => (
	<header className={styles.wrapper}>
		<HeaderNav />
		<Button onClick={openFn}>Add new item</Button>
	</header>
);

export default Header;