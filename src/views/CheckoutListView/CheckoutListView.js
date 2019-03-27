import React from 'react';
import AppContext from '../../context';
import CheckoutList from '../../components/List/CheckoutList';

const CheckoutListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<CheckoutList items={context.checkout} />
		)}

	</AppContext.Consumer>
);

export default CheckoutListView;