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

const lineChart = ( dailyData.length ? (<Line 
data = { { labels: dailyData.map( (id) => { return id } ), setDatasets:[{
    data: dailyData.map( (title) => { return title } ),
    label: 'Title',
    borderColor: '#3333ff',
    fill: true
},{
    data: dailyData.map( (id) => { return id } ),
    label: 'ID',
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 2.5)',
    fill: true
    }  ] } } />) : null );

    return(
        <div className={Styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;