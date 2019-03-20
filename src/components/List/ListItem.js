import React from 'react';
import styles from './ListItem.module.scss';


const ListItem = () => (
	<>
		<li className={styles.wrapper}>
			<div>
				<h2 className={styles.title}>Title</h2>
				<p className={styles.description}>Lorem ipsume ist ...</p>
				<button className={styles.button}>Visit source</button>
			</div>
		</li>
	</>
);

export default ListItem;