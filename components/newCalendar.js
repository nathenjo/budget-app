import React, { useEffect, useState } from 'react';

import CalDay from './calDay';

export default function NewCalendar(props) {

    const {} = props;

    const [curDate, setCurDate] = useState(new Date());
    const [dateChange, setDateChange] = useState('month');
    const [weekArray, setWeekArray] = useState([]);
    const [firstDay, setFirstDay] = useState([]);
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());

    useEffect(() => {
        console.log('Component mounted');
        getFirstDay();
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
        getFirstDay();
    }, [curDate])

    useEffect(() => {
        styleSelDay();
    }, [selectedDay])

    useEffect(() => {
        if (dateChange == 'month') {
            document.querySelector('.current-month').classList.add('selected-param');
            document.querySelector('.current-year').classList.remove('selected-param');
            document.querySelector('#PreviousDateButton').innerText = 'Previous Month';
            document.querySelector('#NextDateButton').innerText = 'Previous Month';
        } else if (dateChange == 'year') {
            document.querySelector('.current-month').classList.remove('selected-param');
            document.querySelector('.current-year').classList.add('selected-param');
            document.querySelector('#PreviousDateButton').innerText = 'Previous Year';
            document.querySelector('#NextDateButton').innerText = 'Previous Year';
        }
    }, [dateChange])

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

    const getFirstDay = () => {
        let tempDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
        let tempArray = [];
        let i = 0;
        while (i < tempDate.getDay()) {
            tempArray.push('');
            i++
        }
        setFirstDay(tempArray);
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
                <button id='PreviousDateButton' className='date-button' onClick={() => changeDate('decrease')}>Previous Month</button>
                <div className='current-date-wrapper'>
                    <span onClick={() => setDateChange('month')} className='current-month'>{curDate.toLocaleString('en-us',{month:'long'})}</span>
                    <span onClick={() => setDateChange('year')} className='current-year'>{curDate.toLocaleString('en-us',{year:'numeric'})}</span>
                </div>
                <button id='NextDateButton' className='date-button' onClick={() => changeDate('increase')}>Next Month</button>
            </div>
            <div className='new-cal__main'>
                <div className='day-header'>Sunday</div>
                <div className='day-header'>Monday</div>
                <div className='day-header'>Tuesday</div>
                <div className='day-header'>Wednesday</div>
                <div className='day-header'>Thursday</div>
                <div className='day-header'>Friday</div>
                <div className='day-header'>Saturday</div>
                {firstDay.map((item, idx) => {
                    return <div key={idx * 3} className='placeholder-day'></div>
                })}
                {weekArray.map((item, idx) => {
                    return <CalDay key={idx * 2} dayNum={idx + 1} setSelectedDay={setSelectedDay} />
                })}
            </div>
            <div className='new-cal__details'>

            </div>
        </div>
    );
}