import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientList.module.scss';

const IngredientList = ({ ingredients }) => (
	<>
	</>
	// <ul className={styles.wrapper}>
	// 	{ingredients.map(ingredient => (
	// 		<li className={styles.item} key={ingredient}>{children}</li>
	// 	))}
	// </ul>
);

IngredientList.propTypes = {
	ingredients: PropTypes.string,
};

IngredientList.defaultProps = {
	ingredients: null,
}
export default IngredientList;