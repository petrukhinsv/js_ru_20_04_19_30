import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import _ from 'lodash'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const elements = articles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isItemOpened(article.id)}
                     toggleOpen = {toggleOpenItem(article.id)}
                     ref = {article.id}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	//FIXME - немного говнокода :(
	//хочется это перенести в reducer - но пока не понял как

	const {articles, selectedArticles, dateRange} = state

	//range
	const dates = articles.map(article => Date.parse(article.date)).sort()
	const minFrom = _.first(dates)
	const maxTo = _.last(dates)

	const from = dateRange.from || minFrom
	const to = dateRange.to || maxTo

	//selected article
	const selectedArticleIDs = _.isEmpty(selectedArticles)
		? articles.map(article => article.id)
		: selectedArticles.map(article => article.value)

	return {
		articles: articles
		.filter(article => _.includes(selectedArticleIDs, article.id))
		.filter(article => from <= Date.parse(article.date) && Date.parse(article.date) <= to)
	}
}

export default connect(mapStateToProps)(accordion(ArticleList))