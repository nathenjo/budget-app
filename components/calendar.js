import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function Calendar(props) {

    const {} = props;

    const [currentDay, setCurrentDay] = useState(Date.now());
    const [lastDay, setLastDay] = useState('');
    const [calTitle, setCalTitle] = useState('');
    const [weekOne, setWeekOne] = useState([]);
    const [weekTwo, setWeekTwo] = useState([]);
    const [weekThree, setWeekThree] = useState([]);
    const [weekFour, setWeekFour] = useState([]);
    const [weekFive, setWeekFive] = useState([]);
    const [weekSix, setWeekSix] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');

    // Initializes the calendar with current date information
    useEffect(() => {
        let titleDate = new Date(currentDay);
        getLastDay(titleDate);
        initCal();
        setCalTitle(titleDate.toLocaleString('en-us',{month:'long', year:'numeric'}));
        setSelectedDay(titleDate.getDate());
        styleSelectedDay();
    }, [])

    // Updates calendar info when currentDay is changed
    useEffect(() => {
        let titleDate = new Date(currentDay);
        getLastDay(titleDate);
        initCal();
        setCalTitle(titleDate.toLocaleString('en-us',{month:'long', year:'numeric'}));
        styleSelectedDay(selectedDay);
    }, [currentDay])

    // Gets the last date for the currentDay month and sets it in state
    const getLastDay = (curDate) => {
        let funcDate = new Date(curDate);
        let lastDate = new Date(funcDate.getFullYear(), funcDate.getMonth()+1,0);
        setLastDay(lastDate.getDate());
    }

    const initCal = () => {
        let stateDate = new Date(currentDay);
        let firstDay = new Date(`${stateDate.getFullYear()}, ${stateDate.getMonth() + 1}, 1`);
        let weekOneArray = [];
        let dayCount = 1;
        for (let i=0;i<=6;i++) {
            if (i < firstDay.getDay()) {
                weekOneArray.push('');
            } else {
                weekOneArray.push(dayCount);
                dayCount += 1;
            }
        }
        setWeekOne(weekOneArray);
        setWeekTwo(initOtherWeek(weekOneArray, 0));
        setWeekThree(initOtherWeek(weekOneArray, 7));
        setWeekFour(initOtherWeek(weekOneArray, 14));
        setWeekFive(initOtherWeek(weekOneArray, 21));
        setWeekSix(initOtherWeek(weekOneArray, 28));
    }

    const initOtherWeek = (prevWeek, mod) => {
        let newWeek = [];
        for (let i=0;i <= 6; i++) {
            if (prevWeek[6] + mod < lastDay) {
                if (prevWeek[6] + (i + 1 + mod) <= lastDay) {
                    newWeek.push(prevWeek[6] + (i + 1 + mod));
                }
            }
        }
        return newWeek;
    }

    const nextMonth = () => {
        let nextDate = new Date(currentDay);
        setCurrentDay(nextDate.setMonth(nextDate.getMonth() + 1));
    }

    const previousMonth = () => {
        let nextDate = new Date(currentDay);
        setCurrentDay(nextDate.setMonth(nextDate.getMonth() - 1));
    }

    const styleSelectedDay = (num) => {
        if (num) {
            let dayArray = Array.prototype.slice.call(document.querySelectorAll('td'));
            if (num == selectedDay) {
                // setSelectedDay(0);
                dayArray.map(item => {
                    if (item.innerText == num) {
                        item.classList.remove('selected-day');
                    }
                })
            } else {
                dayArray.map(item => {
                    if (item.innerText == num) {
                        item.classList.add('selected-day');
                        setSelectedDay(num);
                    } else {
                        item.classList.remove('selected-day');
                    }
                })
            }
        }
    }

    return (
        <div className='calendar-wrapper'>
            <div className='changing-dates'>
                <button onClick={previousMonth}>Previous Month</button>
                <h3>{calTitle}</h3>
                <button onClick={nextMonth}>Next Month</button>
            </div>
            <table className='calendar-table'>
                <tbody>
                    <tr className='calendar-header-row'>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesady</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekOne.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekTwo.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekThree.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekFour.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekFive.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr className='calendar-week-row'>
                        {weekSix.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e.target.innerText)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                </tbody>
            </table>
            <div>
                {selectedDay}
            </div>
        </div>
        
    );
}