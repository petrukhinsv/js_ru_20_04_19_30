import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ text, user }) => (
	<div>
		<p>{text} <b>by {user}</b></p>
	</div>
);

Comment.propTypes = {
	text: PropTypes.string,
	user: PropTypes.string,
};

Comment.defaultProps = {
	text: '',
	user: '',
};

export default Comment;
