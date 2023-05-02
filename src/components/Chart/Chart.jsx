import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import { setDatasets } from 'react-chartjs-2/dist/utils';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect( () => {
        const fetchAPI =  async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    const lineChart = (<Line data = { { labels:'', setDatasets:[{},{}] } } />);

    return(
        <hi>Chart</hi>
    )
}

export default Chart;