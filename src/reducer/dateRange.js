import {SELECT_DATE_RANGE} from '../constants'

const initialState = {from: null, to: null}

export default (dateRange = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SELECT_DATE_RANGE:
			const {from, to} = payload.dateRange;
			return {from, to}
    }

    return dateRange
}
