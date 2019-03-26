import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientList.module.scss';

const IngredientList = ({ ingredients }) => (
	<ul className={styles.wrapper}>
		{ingredients.map(ingredient => (
			<li className={styles.item} key={ingredient}>{ingredient}</li>
		))}
	</ul>
);

IngredientList.propTypes = {
	ingredients: PropTypes.array,
};

IngredientList.defaultProps = {
	ingredients: null,
}
export default IngredientList;