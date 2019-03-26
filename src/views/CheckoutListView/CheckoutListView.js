import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const CheckoutListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<List items={context.checkout} />
		)}

	</AppContext.Consumer>
);

export default CheckoutListView;