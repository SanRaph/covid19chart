import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
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