import React, { useState, useEffect } from 'react';

import { formControl, NativeSelect } from '@material-ui/core';

import Styles from './StatePicker.module.css';

import {fetchedStates} from '../../api';

const StatePicker = () => {
    const [fetchedState, setFetchStates] = useState([]);

    useEffect( () => {
        const fetchedAPI = async () => {
            setFetchStates(await fetchedStates);
        }

    }, [setFetchStates] );

    console.log(fetchedState);
    
    return(
        <formControl>
             <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </formControl>
    )
}

export default StatePicker;