import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Comments from '../comments/';

const Article = ({ article, isOpen, toggleOpen }) => (
	<section>
		<h2 onClick={toggleOpen}>{article.title}</h2>
		{
			isOpen &&
			(
				<div>
					{article.text}
					<Comments comments={article.comments} />
				</div>
			)
	}
	</section>
);

Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		text: PropTypes.string,
		comments: PropTypes.array,
	}).isRequired,
	isOpen: PropTypes.bool,
	toggleOpen: PropTypes.func,
};

Article.defaultProps = {
	isOpen: _.noop,
	toggleOpen: _.noop,
};

export default Article;
