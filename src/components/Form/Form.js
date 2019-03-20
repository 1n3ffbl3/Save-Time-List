import React from 'react';
import styles from './Form.module.scss';
import Title from '../Title/Title';


class Form extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Title>Add new item</Title>
				<form
					autoComplete="off"
					className={styles.form}
				>
					<input>
					</input>
				</form>

			</div>
		)
	}
};

export default Form;