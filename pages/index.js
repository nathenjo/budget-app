import React, { useEffect, useState } from 'react';
import Calendar from '../components/calendar';
import Input from '../components/input';
import NewCalendar from '../components/newCalendar';

export default function Home(props) {

    const {} = props;

    useEffect(() => {
        console.log('Index loaded');
        getCBData();
    }, [])

    const dummyData = [
        {
            'id': '4262023',
            'income-total': '2002.71',
            'bills-total': '1536.84'
        },
        {
            'id': '5122023',
            'income-total': '2005.71',
            'bills-total': '1465.07'
        }
    ]

    const getCBData = (cbid) => {
        dummyData.map(item => {
            if (item['id'] == cbid) {
                console.log(item['income-total'], item['bills-total']);
            }
        })
    }

    const [selDate, setSelDate] = useState('');
    const [checkData, setCheckData] = useState([]);

    return (
        <div className='home-wrapper'>
            <nav className='nav-header'>
                <div className='nav-placeholder'></div>
                <h1>Budget Application</h1>
                <span>$ Icon</span>
                <div className='nav-placeholder2'></div>
            </nav>
            <main className='main-section'>
                <div className='main-column-left'>
                    <div className='existing-checkbooks-wrapper'>
                        <h2>Existing Checkbooks</h2>
                        <select onChange={(e) => console.log('Select changed', e.target)}>
                            <option value='4262023'>Checkbook Date 4-26-2023</option>
                            <option value='5122023' selected>Checkbook Date 5-12-2023</option>
                        </select>
                    </div>
                    <Input propAttr={[{'name': 'Test Name'}]}propClass='income' inputType='text' propPlace='$ 0.00' />
                    <Input propClass='bills' inputType='text' propPlace='$ 0.00' />
                    <Input propClass='leftover' inputType='text' propPlace='$ 0.00' />
                    <Input propClass='add-checkbook' inputType='text' propPlace='Checkbook Name...' />
                </div>
                <div className='main-column-right'>
                    <NewCalendar />
                </div>
            </main>
            <footer className='page-footer'>
                <h3 className='footer-header'>Add Bill</h3>
                <div className='add-bill-wrapper'>
                    <Input propClass='bill-name' inputType='text' propPlace='Bill Name...' />
                    <Input propClass='bill-category' inputType='text' propPlace='Bill Category...' />
                </div>
            </footer>
        </div>
    );
}