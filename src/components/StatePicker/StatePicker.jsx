import React, { useState, useEffect } from 'react';

import { formControl, NativeSelect } from '@material-ui/core';

import Styles from './StatePicker.module.css';

import {fetchedStates} from '../../api';

const StatePicker = ({ handleStateChange }) => {
    const [fetchedStatesValues, setFetchStatesValues] = useState([]);

    useEffect( () => {
        const fetchedAPI = async () => {
            setFetchStatesValues(await fetchedStates());
        }

        fetchedAPI();

    }, [setFetchStatesValues] );

    console.log(fetchedStates.data);
    
    return(
        <formControl>
             <NativeSelect>
                <option value='global'>Global</option>
                {fetchedStatesValues.map((state, index) => <option key={index} value='state'>{state}</option>)}

                fetchedS
            </NativeSelect>
        </formControl>
    )
}

export default StatePicker;