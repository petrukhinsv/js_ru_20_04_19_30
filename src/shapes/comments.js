import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.number.isRequired,
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}),
);
