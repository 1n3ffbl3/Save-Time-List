import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeFn }) => (
	<div className={styles.wrapper}>
		<button onClick={closeFn} className={styles.closeButton}>x</button>
		<Form />
	</div>
);

export default Modal;