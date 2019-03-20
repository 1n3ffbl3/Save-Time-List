import React from 'react';
import styles from './ListItem.module.scss';


const ListItem = () => {
	return (
		<li className={styles.wrapper}>
			<img
				src={'https://unsplash.it/200/200'}
				className={styles.image}
			/>
			<div>
				<h2 className={styles.title}>Title</h2>
				<p className={styles.description}>Teststetes testest  tes t
				</p>
				<button className={styles.button} href={'https://google.com'}>Visit source</button>
			</div>
		</li>
	)
};
export default ListItem;