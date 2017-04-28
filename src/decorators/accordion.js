// HOC === Higher Order Component === decorator
import React, { Component as BasicComponent } from 'react';
import _ from 'lodash';

export const openItemIdDefault = null;
const isOpenItemIdDefault = value => _.isNull(value);

export default OriginalComponent => class DecoratedComponent extends BasicComponent {
	state = {
		openItemId: openItemIdDefault,
	}

	toggleOpen = id => () => {
		if (isOpenItemIdDefault(this.state.openItemId)) {
			this.setState({ openItemId: id });
		} else {
			const openItemId = this.state.openItemId === id ? openItemIdDefault : id;
			this.setState({ openItemId });
		}
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />;
	}
};
