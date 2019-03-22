import React from 'react';
import styles from './Form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';

class Form extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Title>Add new item</Title>
				<form
					autoComplete="off"
					className={styles.form}
				>
					<Input />
				</form>

			</div>
		)
	}
};

export default Form;