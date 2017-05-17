import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {dispatchSelectArticles} from '../../AC/index'
import {connect} from 'react-redux'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select
				options = {options}
				value = {this.props.selectedArticles}
                onChange = {this.handleSelectionChange}
                multi = {true}
            />
        )
    }

	handleSelectionChange = selection => this.props.dispatchSelectArticles(selection)
}

const mapStateToProps = state => ({selectedArticles: state.selectedArticles})

export default connect(mapStateToProps, { dispatchSelectArticles })(SelectFilter)
