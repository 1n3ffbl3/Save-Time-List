import React from 'react';
import './index.css';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
		checkout: [],
		grocery: [],
		thingsToSee: [],
		isModalOpen: true,
	}

	openModal = () => {
		this.setState({
			isModalOpen: true
		})
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false
		})
	};

	addItem = (event, newItem) => {
		event.preventDefault();

		this.setState(prevState => ({
			[newItem.type]: [...prevState[newItem.type], newItem],
		}));

		this.closeModal();
	}

	render() {
		const { isModalOpen } = this.state;
		const contextElements = {
			...this.state,
			addItem: this.addItem,
		}
		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header openFn={this.openModal} />
					<Switch>
						<Route exact path="/" component={GroceryListView}></Route>
						<Route path="/checkout" component={CheckoutListView}></Route>
						<Route path="/thingstosee" component={ThingsToSeeListView}></Route>
					</Switch>
					{isModalOpen && <Modal closeFn={this.closeModal} />}
				</AppContext.Provider>
			</BrowserRouter>
		)
	}
};

export default Root;