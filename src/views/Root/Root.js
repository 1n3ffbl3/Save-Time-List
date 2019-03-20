import React from 'react';
import './index.css';
import List from '../../components/List/List';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {

	render() {
		return (
			<div>
				<List />
				<Modal />
			</div>
		)
	}
};

export default Root;