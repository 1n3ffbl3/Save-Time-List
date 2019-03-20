import React from 'react';
import styles from './ListItem.module.scss';


const ItemList = () => {
	return (
		<li className={styles.wrapper}>
			<img className={styles.image} src={'https://unsplash.it/200/200'} />
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Title</h2>
				<p className={styles.description}>Descriptiom</p>
				<button className={styles.button}>Source</button>
			</div>


		</li>
	)
};

export default ItemList;