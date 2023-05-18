import React from 'react';

export default function CalDay(props) {

    const {dayNum} = props;

    const calClick = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <div onClick={(e) => calClick(e)} className='calendar-day'>
            {dayNum}
        </div>
    );
}