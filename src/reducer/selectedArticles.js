import {SELECT_ARTICLES} from '../constants'

export default (articles = [], action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_ARTICLES:
			return payload.articles
    }

    return articles
}
