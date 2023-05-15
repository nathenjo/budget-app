import React, { useEffect, useState } from 'react';

export default function NewCalendar(props) {

    const {} = props;

    const startDate = new Date();

    const [curMonth, setCurMonth] = useState(startDate);

    useEffect(() => {
        console.log('Calendar Component mounted')
    }, [])


    return (
        <div className='new-cal'>
            <div className='new-cal__header'>
                <button>Previous Month</button>
                <div className='current-date-wrapper'>
                    <span className='current-month'>{curMonth.toLocaleString('en-us',{month:'long'})}</span>
                    <span className='current-year'>Current Year</span>
                </div>
                <button>Next Month</button>
            </div>
            <div className='new-cal__main'>

            </div>
            <div className='new-cal__details'>

            </div>
        </div>
    );
}