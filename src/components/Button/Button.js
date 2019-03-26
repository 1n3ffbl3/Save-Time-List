import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary, ...props }) => {

	const buttonClass = secondary ? styles.secondary : styles.button;
	return (
		<>
			{
				href ? (
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className={buttonClass}
					>
						{children}
					</a>
				) : (
						<button className={buttonClass} {...props} >
							{children}
						</button>
					)
			}
		</>
	);
}



Button.propTypes = {
	href: PropTypes.string,
	secondary: PropTypes.bool,
};

Button.defaultProps = {
	href: null,
	secondary: null,
};

export default Button;