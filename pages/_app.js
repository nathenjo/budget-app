import '../styles/master.scss';
import { useState, useEffect } from 'react';

export default function App({Component, pageProps}) {

    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', function() {
            setWindowWidth(window.innerWidth);
        });
    }, [windowWidth])

    return (
        <Component
            {...pageProps}
            windowWidth={windowWidth}
        />
    )
}