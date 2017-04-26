import React from 'react'

export default function CommentList({ comments }) {
    const elements = comments.map(comment =>
		<li key={comment.id}>
			{comment.text}
			<br />
			<br />
			By: {comment.user}
			<br />
			<br />
		</li>
	)
    return (
        <ul>
            {elements}
        </ul>
    )
}