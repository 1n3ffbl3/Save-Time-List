import React from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

const initalState = [
	{
		image: 'https://unsplash.it/200/200',
		title: 'Frist recipe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/',
		ingredients: ['potatos', 'carrots', 'mushrooms'],
	},
	{
		image: 'https://unsplash.it/200/200',
		title: 'Second recipe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/',
		ingredients: ['potatos', 'carrots', 'mushrooms'],
	},
	{
		image: 'https://unsplash.it/200/200',
		title: 'Third recipe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/',
		ingredients: ['potatos', 'carrots', 'mushrooms'],
	},
]
class Root extends React.Component {
	state = {
		items: [...initalState],
		isModalOpen: false,
	}

	openModal = () => {
		this.setState({
			isModalOpen: true
		})
	}
	render() {
		return (
			<div>
				<Button onClick={this.openModal}>Add new item</Button>
				<List items={this.state.items} />
				{/* <Modal /> */}
			</div>
		)
	}
};

export default Root;