import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect( () => {
        const fetchAPI =  async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    return(
        <hi>Chart</hi>
    )
}

export default Chart;