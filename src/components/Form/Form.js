import React from 'react';
import styles from './Form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import FormRadio from './FormRadio';

const types = {
	grocery: 'grocery',
	checkout: 'checkout',
	thingsToSee: 'thingsToSee'
}
class Form extends React.Component {
	state = {
		type: types.grocery,
		title: '',
		image: '',
		link: '',
		description: '',
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { type } = this.state;

		return (
			<div className={styles.wrapper}>
				<Title>Add new item</Title>
				<FormRadio
					id={types.grocery}
					checked={type === types.grocery}
				>grocery
				</FormRadio>
				<FormRadio
					id={types.checkout}
					checked={type === types.checkout}
				>checkout
				</FormRadio>
				<FormRadio
					id={types.thingsToSee}
					checked={type === types.thingsToSee}
				>things to see
				</FormRadio>
				<form
					autoComplete="off"
					className={styles.form}
				>
					<Input
						onChange={this.handleInputChange}
						value={this.state.title}
						name="title"
						label="title"
					/>
					<Input
						onChange={this.handleInputChange}
						value={this.state.image}
						name="image"
						label="image"
					/>
					<Input
						onChange={this.handleInputChange}
						value={this.state.link}
						name="link"
						label="link"
					/>
					<Input
						onChange={this.handleInputChange}
						value={this.state.description}
						name="description"
						tag="textarea"
						label="description"
					/>
				</form>
				<Button>Save</Button>

			</div>
		)
	}
};

export default Form;