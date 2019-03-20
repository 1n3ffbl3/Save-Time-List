import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Button from '../Button/Button';
import IngredientList from '../IngredientList/IngredientList';


const ListItem = ({
	image,
	title,
	description,
	link,
	ingredients
}) => {
	return (
		<li className={styles.wrapper}>
			<img
				src={image}
				className={styles.image}
				alt={title}
			/>
			<div className={styles.subWrapper}>
				<Title>{title}</Title>
				<p className={styles.description}>
					{description}
				</p>
				<Button href={link}>Visit source</Button>
			</div>
			<IngredientList ingredients={ingredients} />
		</li>
	)
};
ListItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
	image: null,
	link: null,
}
export default ListItem;