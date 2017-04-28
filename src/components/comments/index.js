import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import ToggleOpenDecorator from '../../decorators/toggleOpen';
import CommentsShape from '../../shapes/comments';

const CommentList = ({ isOpen, toggleOpen, comments }) => {
	const linkText = isOpen ? 'hide comments' : 'show comments';

	return (
		<div>
			<a href="#" onClick={toggleOpen}>{linkText}</a>
			{ isOpen && <Comments comments={comments} /> }
		</div>
	);
};

CommentList.propTypes = {
	comments: CommentsShape,

	// from decorator
	isOpen: PropTypes.bool.isRequired,
	toggleOpen: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
	comments: [],
};

export default ToggleOpenDecorator(CommentList);
