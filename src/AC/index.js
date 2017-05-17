import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES, SELECT_DATE_RANGE } from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function dispatchSelectArticles(articles) {
    return {
        type: SELECT_ARTICLES,
		payload : { articles }
    }
}

export function dispatchSelectDateRange(dateRange) {
    return {
        type: SELECT_DATE_RANGE,
		payload : { dateRange }
    }
}