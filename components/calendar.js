import React, { useEffect, useState } from 'react';

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
    }, [])

    // Updates calendar info when currentDay is changed
    useEffect(() => {
        let titleDate = new Date(currentDay);
        setLastDay(getLastDay(titleDate.getFullYear(), titleDate.getMonth()));
        initCal();
        setCalTitle(titleDate.toLocaleString('en-us',{month:'long', year:'numeric'}));
    }, [currentDay, lastDay])

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

    const styleSelectedDay = () => {
        let selDate = new Date(currentDay);
        
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
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesady</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                    <tr>
                        {weekOne.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekTwo.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekThree.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekFour.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekFive.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                    <tr>
                        {weekSix.map((item, index) => {
                            return <td className='cal-row-cell' key={index}>{item}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}