import React from 'react';
import Calendar from '../components/calendar';

export default function Home(props) {

    const {} = props;

    return (
        <div className='home-wrapper'>
            Home Component
            <Calendar />
        </div>
    );
}