import PropTypes from 'prop-types';
import CommentsShape from './comments';

export default PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		comments: CommentsShape,
	}),
);
