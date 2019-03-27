import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem';

const CheckoutList = ({ items }) => (
	<>
		{items.length ? (
			<ul className={styles.wrapper}>
				{items.map(item => (
					<label className="container">
						<input type="checkbox" />
						<span className="checkmark">
							<ListItem {...item} key={item.title} />
						</span>
					</label>
				))}

			</ul>

		) : (
				<h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
			)}
	</>
);



export default CheckoutList;