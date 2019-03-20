import React from 'react';
import styles from './ListItem.module.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
import IngredientList from '../IngredientList/IngredientList';

const ListItem = () => {
	return (
		<li className={styles.wrapper}>
			<img
				src={'https://unsplash.it/200/200'}
				className={styles.image}
			/>
			<div className={styles.subWrapper}>
				<Title>Recipe</Title>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.
				</p>
				<Button href={'https://www.google.com/'}>Visit source</Button>
			</div>
			<IngredientList />
		</li>
	)
};
export default ListItem;