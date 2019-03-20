import React from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import GroceryListView from '../GroceryListView/GroceryListView';
import CheckoutListView from '../CheckoutListView/CheckoutListView';
import ThingsToSeeListView from '../ThingsToSeeListView/ThingsToSeeListView';

const initalState = [
	{
		image: 'https://unsplash.it/200/200',
		title: 'First recipe',
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
			<BrowserRouter>
				<>
					<Route exact path="/" component={GroceryListView}></Route>
					<Route path="/checkout" component={CheckoutListView}></Route>
					<Route path="/thingstosee" component={ThingsToSeeListView}></Route>
					<Header openFn={this.openModal} />

					<List items={this.state.items} />
					{/* <Modal /> */}
				</>
			</BrowserRouter>
		)
	}
};

export default Root;