import React, { useEffect, useState } from 'react';

export default function NewCalendar(props) {

    const {} = props;

    const [curDate, setCurDate] = useState(new Date());
    const [dateChange, setDateChange] = useState('month');

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    useEffect(() => {
        console.log('Date state changed');
        
    }, [curDate])

    const changeDate = (op) => {
        let tempDate = new Date(curDate);
        if (op == 'increase') {
            if (dateChange == 'month') {
                setCurDate(new Date(tempDate.getFullYear(),tempDate.getMonth() + 1, tempDate.getDate()));
            } else if (dateChange == 'year') {
                setCurDate(new Date(tempDate.getFullYear() + 1,tempDate.getMonth(), tempDate.getDate()));
            }
        } else if (op == 'decrease') {
            if (dateChange == 'month') {
                setCurDate(new Date(tempDate.getFullYear(),tempDate.getMonth() - 1, tempDate.getDate()));
            } else if (dateChange == 'year') {
                setCurDate(new Date(tempDate.getFullYear() - 1,tempDate.getMonth(), tempDate.getDate()));
            }
        }
    }

    const getLastDate = () => {
        let tempDate = new Date(curDate);
        let lastDayDate = new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, 0);
        return lastDayDate.getDate();
    }

    return (
        <div className='new-cal'>
            <div className='new-cal__header'>
                <button onClick={() => changeDate('decrease')}>Previous Month</button>
                <div className='current-date-wrapper'>
                    <span onClick={() => setDateChange('month')} className='current-month'>{curDate.toLocaleString('en-us',{month:'long'})}</span>
                    <span onClick={() => setDateChange('year')} className='current-year'>{curDate.toLocaleString('en-us',{year:'numeric'})}</span>
                </div>
                <button onClick={() => changeDate('increase')}>Next Month</button>
            </div>
            <div className='new-cal__main'>
                 
            </div>
            <div className='new-cal__details'>

            </div>
        </div>
    );
}