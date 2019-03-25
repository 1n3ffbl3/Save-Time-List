import React from 'react';
import styles from './FormRadio.module.scss';

const FormRadio = ({ children, id, checked, switchFn }) => (
	<label className={styles.radio}>
		<input
			id={id}
			type="radio"
			checked={checked}
			onChange={switchFn}
		/>
		<div className={styles.radioButton} />
		{children}
	</label>
);

export default FormRadio;