import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const List = ({ items }) => (
	<>
		{items.length ? (
			<ul className={styles.wrapper}>
				{items.map(item => (
					<ListItem {...item} key={item.title} />
				))}

			</ul>
		) : (
				<h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
			)}
	</>
);



export default List;