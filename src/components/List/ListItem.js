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

	const ImageTag = image ? 'img' : 'div';
	return (
		<li className={styles.wrapper}>
			{image && <ImageTag
				src={image}
				className={image ? styles.image : styles.imageNone}
				alt={title}
			/>}
			<div className={styles.subWrapper}>
				<Title>{title}</Title>

				{description &&
					<p className={styles.description}>{description}</p>}

				{link && <Button href={link}>Visit source</Button>}
			</div>
			<IngredientList ingredients={ingredients} />
		</li>
	)
};
ListItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
	image: null,
	title: null,
	description: null,
	link: null,
}
export default ListItem;