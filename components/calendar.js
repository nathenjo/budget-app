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
        setLastDay(getLastDay(titleDate.getFullYear(), titleDate.getMonth()));
        initCal();
        setCalTitle(titleDate.toLocaleString('en-us',{month:'long', year:'numeric'}));
        setSelectedDay(titleDate.getDate());
        styleSelectedDay();
    }, [])

    // Updates calendar info when currentDay is changed
    useEffect(() => {
        let titleDate = new Date(currentDay);
        setLastDay(getLastDay(titleDate.getFullYear(), titleDate.getMonth()));
        initCal();
        setCalTitle(titleDate.toLocaleString('en-us',{month:'long', year:'numeric'}));
        styleSelectedDay();
    }, [currentDay, lastDay, selectedDay])

    // Gets the last date for the currentDay month
    const getLastDay = (y,m) => {
        let lastDate = new Date(y,m+1,0);
        return lastDate.getDate();
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

    const styleSelectedDay = (e) => {
        if (e) {
            let dayArray = Array.prototype.slice.call(document.querySelectorAll('td'));
            if (e.target.innerText == selectedDay) {
                setSelectedDay(0);
                dayArray.map(item => {
                    if (item.innerText == e.target.innerText) {
                        item.classList.remove('selected-day');
                    }
                })
            } else {
                dayArray.map(item => {
                    if (item.innerText == e.target.innerText) {
                        item.classList.add('selected-day');
                        setSelectedDay(e.target.innerText);
                    } else {
                        item.classList.remove('selected-day');
                    }
                })
            }
        }
    }

    return (
        <div className='calendar-wrapper'>
            <div>
                <button onClick={previousMonth}>Previous Month</button>
                <h3>{calTitle}</h3>
                <button onClick={nextMonth}>Next Month</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesady</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    <tr>
                        {weekOne.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekTwo.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekThree.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekFour.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekFive.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekSix.map((item, index) => {
                            return <td onClick={(e) => styleSelectedDay(e)} className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}