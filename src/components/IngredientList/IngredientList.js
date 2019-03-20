import React from 'react';
import styles from './IngredientList.module.scss';

const IngredientList = ({ ingredients }) => (
	<ul className={styles.wrapper}>
		{ingredients.map(ingredient => (
			<li className={styles.item} key={ingredient}>{ingredient}</li>
		))}
	</ul>
);

export default IngredientList;