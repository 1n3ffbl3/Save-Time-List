import React from 'react';
import styles from './IngredientList.module.scss';

const IngredientList = () => (
	<ul className={styles.wrapper}>
		<li className={styles.item}>potatos</li>
		<li className={styles.item}>carrots</li>
		<li className={styles.item}>mushrooms</li>

	</ul>
);

export default IngredientList;