import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import ArticlesShape from '../../shapes/articles';
import AccordionDecorator, { openItemIdDefault } from '../../decorators/accordion';

const ArticleList = ({ openItemId, toggleOpen, articles }) => {
	const elements = articles.map(article => (
		<li key={article.id}>
			<Article
				article={article}
				isOpen={article.id === openItemId}
				toggleOpen={toggleOpen(article.id)}
			/>
		</li>
		),
	);

	return <ul>{elements}</ul>;
};

ArticleList.propTypes = {
	articles: ArticlesShape.isRequired,

	// from decorator
	openItemId: PropTypes.string,
	toggleOpen: PropTypes.func.isRequired,
};

ArticleList.defaultProps = {
	openItemId: openItemIdDefault,
};

export default AccordionDecorator(ArticleList);
