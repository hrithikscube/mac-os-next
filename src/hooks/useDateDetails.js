import { useState, useEffect } from 'react';

const useDateDetails = () => {
    const [today, setToday] = useState({
        day: '',
        date: '',
        month: '',
        time: '',
    });

    useEffect(() => {
        const getDateDetails = () => {
            const currentDate = new Date();
            const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
            const date = currentDate.toLocaleDateString();
            const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
            const time = currentDate.toLocaleTimeString();

            setToday({
                day,
                date,
                month,
                time,
            });
        };

        getDateDetails();

        const interval = setInterval(() => {
            getDateDetails();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return today;
};

export default useDateDetails;
