import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {dispatchSelectDateRange} from '../../AC/index'
import {connect} from 'react-redux'
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
		const {dispatchSelectDateRange} = this.props
		dispatchSelectDateRange(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

const mapStateToProps = state => ({dateRange: state.dateRange})

export default connect(mapStateToProps, { dispatchSelectDateRange })(DateRange)