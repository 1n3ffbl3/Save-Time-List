import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ tag: Tag, name, label, ...props }) => (
	<div className={styles.formItem}>
		<Tag
			className={Tag !== 'textarea' ? styles.input : styles.textarea}
			type="text"
			name={name}
			id={name}
			required
			placeholder=" "
			{...props}
		/>
		<label className={styles.label} htmlFor={name}>
			{label}
		</label>
		<div className={styles.formItemBar}></div>
	</div>
);

Input.propTypes = {
	tag: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

Input.defaultProps = {
	tag: 'input',
}

export default Input;