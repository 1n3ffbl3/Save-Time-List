import React from 'react';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label }) => (
	<div className={styles.formItem}>
		<Tag
			className={styles.input}
			type="text"
			name={name}
			id={name}
			required
			placeholder=" "
		/>
		<label className={styles.label} htmFor={name}>
			{label}
		</label>
		<div className={styles.formItemBar}></div>
	</div>
);

export default Input;