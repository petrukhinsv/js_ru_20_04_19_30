import React from 'react';
import Comment from './Comment';
import CommentsShape from '../../shapes/comments';

const Comments = ({ comments }) => {
	if (!comments.length) return <p>No comments yet</p>;
	return (
		<ul>
			{comments.map(comment => <li key={comment.id}><Comment {...comment} /></li>)}
		</ul>
	);
};

Comments.propTypes = {
	comments: CommentsShape.isRequired,
};

export default Comments;
