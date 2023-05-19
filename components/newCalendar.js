import React, { useEffect, useState } from 'react';

import CalDay from './calDay';

export default function NewCalendar(props) {

    const {} = props;

    const [curDate, setCurDate] = useState(new Date());
    const [dateChange, setDateChange] = useState('month');
    const [weekArray, setWeekArray] = useState([]);
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    useEffect(() => {
        console.log('Date state changed');
        let tempArray = [];
        let i = 0;
        while (i < getLastDate()) {
            tempArray.push('');
            i++;
        }
        setWeekArray(tempArray);
        setSelectedDay('');
        styleSelDay();
    }, [curDate])

    useEffect(() => {
        styleSelDay();
    }, [selectedDay])

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

    const styleSelDay = () => {
        let calDayArray = Array.prototype.slice.call(document.querySelectorAll('.calendar-day'));
        calDayArray.map((item, index) => {
            if (item.innerText == selectedDay) {
                item.classList.add('selected-day')
            } else {
                item.classList.remove('selected-day');
            }
        })
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
                {weekArray.map((item, idx) => {
                    return <CalDay key={idx * 2} dayNum={idx + 1} setSelectedDay={setSelectedDay} />
                })}
            </div>
            <div className='new-cal__details'>

            </div>
        </div>
    );
}