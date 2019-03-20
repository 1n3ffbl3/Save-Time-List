import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({ items }) => (
	<>
		<ul className={styles.wrapper}>
			{items.map(item => (
				<ListItem {...item} key={item.title} />
			))}

		</ul>
	</>
);



export default List;