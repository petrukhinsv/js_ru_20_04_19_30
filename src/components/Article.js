import React, {Component} from 'react'
import CommentList from './CommentList'

const Comments = ({comments, open, onClick}) => {
	if (comments.length <= 0) {
		return <h4>No comments</h4>
	}

	return <h4 onClick={onClick}>Comments ({comments.length}) {open ? 'opened' : ''}</h4>
}

export default class Article extends Component {
    state = {
        isArticleOpen: false,
		isCommentsOpen: false
    }

    render() {
        const {article} = this.props

		//normalize comments
		const comments = article.comments ? article.comments : [];

        return (
			<div>
	            <section>
	                <h2 onClick={this.toggleArticle}>
	                    {article.title}
	                </h2>
	                {this.getBody()}
	            </section>

				<Comments
					comments={comments}
					open={this.state.isCommentsOpen}
					onClick={this.toggleComments}
				/>

				{
					this.state.isCommentsOpen &&
					<section>
						<CommentList comments={comments} />
					</section>
				}
			</div>
        )
    }

    getBody() {
        return this.state.isArticleOpen && <div>{this.props.article.text}</div>
    }

    toggleArticle = () => {
        this.setState({
            isArticleOpen: !this.state.isArticleOpen
        })
    }

	toggleComments = () => {
		this.setState({
			isCommentsOpen: !this.state.isCommentsOpen
		})
	}
}
