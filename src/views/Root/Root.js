import React from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';

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
	}
	render() {
		return (
			<div>
				<List items={this.state.items} />
				{/* <Modal /> */}
			</div>
		)
	}
};

export default Root;