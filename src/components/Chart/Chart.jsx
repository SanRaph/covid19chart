import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import Styles from './Chart.module.css';


const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect( () => {
        const fetchAPI =  async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);
        fetchAPI();
    }, []);



    return(
        <div className={Styles.container}>
            <h1>Chart </h1>
        </div>
    )
}

export default Chart;