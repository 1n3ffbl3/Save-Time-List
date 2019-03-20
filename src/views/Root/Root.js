import React from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';

const initalState = [
	{
		image: 'https://unsplash.it/200/200',
		title: 'Frist recipe',
		decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/'
	},
	{
		image: 'https://unsplash.it/200/200',
		title: 'Second recipe',
		decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/'
	},
	{
		image: 'https://unsplash.it/200/200',
		title: 'Third recipe',
		decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit neque. In mattis faucibus neque, ac aliquam massa gravida id. Quisque vestibulum tristique justo a scelerisque.',
		link: 'https://www.google.com/'
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