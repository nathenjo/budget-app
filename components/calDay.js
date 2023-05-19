import React from 'react';

export default function CalDay(props) {

    const {dayNum, setSelectedDay} = props;

    const calClick = (e) => {
        setSelectedDay(e.target.innerText);
    }

    return (
        <div onClick={(e) => calClick(e)} className='calendar-day'>
            {dayNum}
        </div>
    );
}