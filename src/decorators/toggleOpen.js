// HOC === Higher Order Component === decorator
import React, { Component as BasicComponent } from 'react';
import _ from 'lodash';

export default OriginalComponent => class DecoratedComponent extends BasicComponent {
	state = {
		isOpen: false,
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />;
	}

	toggleOpen = (ev) => {
		if (ev && _.isFunction(ev.preventDefault)) {
			ev.preventDefault();
		}
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
};
