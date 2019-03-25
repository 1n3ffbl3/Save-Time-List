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

	handleRadioButtonChange = type => {
		this.setState({
			type: type,
		});
	};

	render() {
		const { type } = this.state;

		return (
			<div className={styles.wrapper}>
				<Title>Add new item</Title>
				<form
					autoComplete="off"
					className={styles.form}>
					<FormRadio
						id={types.grocery}
						checked={type === types.grocery}
						switchFn={() => this.handleRadioButtonChange(types.grocery)}
					>
						grocery
					</FormRadio>
					<FormRadio
						id={types.checkout}
						checked={type === types.checkout}
						switchFn={() => this.handleRadioButtonChange(types.checkout)}
					>
						checkouts
					</FormRadio>
					<FormRadio
						id={types.thingsToSee}
						checked={type === types.thingsToSee}
						switchFn={() => this.handleRadioButtonChange(types.thingsToSee)}
					>
						things to see
					</FormRadio>
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
					<Button>Save</Button>
				</form>
			</div>
		)
	}
};

export default Form;