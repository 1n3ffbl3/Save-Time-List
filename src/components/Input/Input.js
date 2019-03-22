import React from 'react';
import styles from './Input.module.scss';

const Input = () => (
	<label for="input" className={styles.inp}>
		<input placeholder=' '></input>
		<span className={styles.label}>Title</span>
		<span className={styles.border}></span>
	</label>
);

export default Input;