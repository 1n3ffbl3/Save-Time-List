import React from 'react';
import styles from './FormRadio.module.scss';

const FormRadio = ({ children, id, checked }) => (
	<label className={styles.radio}>
		<input
			id={id}
			checked={checked}
		>
		</input>
		<div className={styles.radioButton}>
			{children}
		</div>
	</label>
);

export default FormRadio;