import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ThingsToSeeListView = () => (
	<AppContext.Consumer>
		{(context) => (
			<List items={context.thingsToSee} />
		)}
	</AppContext.Consumer>
);

export default ThingsToSeeListView;