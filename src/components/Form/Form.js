import React from 'react';
import styles from './Form.module.scss';
import Title from '../Title/Title';
import Input from '../Input/Input';

const types = {
	grocery: 'grocery',
	checkout: 'checkout',
	thingsToSee: 'thingsToSee'
}
class Form extends React.Component {
	state = {
		types: types.grocery,
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
		return (
			<div className={styles.wrapper}>
				<Title>Add new item</Title>
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

			</div>
		)
	}
};

export default Form;