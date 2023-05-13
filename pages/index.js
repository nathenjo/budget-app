import React from 'react';
import Calendar from '../components/calendar';
import Input from '../components/input';

export default function Home(props) {

    const {} = props;

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
                        <select>
                            <option>Checkbook Date 4-26-2023</option>
                            <option>Checkbook Date 5-12-2023</option>
                        </select>
                    </div>
                    <Input propClass='income' label='Income' inputType='text' icon='&#43' />
                    <div className='bills-wrapper'>
                        <h3>Bills</h3>
                        <input type='text' className='bills-input' />
                    </div>
                    <div className='leftover-wrapper'>
                        <h3>Leftover</h3>
                        <input type='text' className='leftover-input' />
                    </div>
                    <div className='add-checkbook-wrapper'>
                        <button>Add Checkbook</button>
                        <input type='text' className='new-checkboox-input' />
                    </div>
                </div>
                <div className='main-column-right'>
                    <Calendar />
                </div>
            </main>
            <footer className='page-footer'>
                <h3 className='footer-header'>Add Bill</h3>
                <div className='add-bill-wrapper'>
                    <Input propClass='bill-name' label='Bill Name' inputType='text' icon='&#43' />
                    <Input propClass='bill-category' label='Bill Category' inputType='text' icon='&#43' />
                </div>
            </footer>
        </div>
    );
}