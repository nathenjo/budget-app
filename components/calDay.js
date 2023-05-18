import React from 'react';

export default function CalDay(props) {

    const {dayNum} = props;

    

    return (
        <div className='calendar-day'>
            {dayNum}
        </div>
    );
}