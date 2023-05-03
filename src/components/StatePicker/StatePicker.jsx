import React, { useState, useEffect } from 'react';

import { formControl, NativeSelect } from '@material-ui/core';

import Styles from './StatePicker.module.css';

import {fetchedStates} from '../../api';

const StatePicker = () => {
    const [fetchedStates, setFetchStates] = useState([]);

    useEffect( () => {
        const fetchedAPI = async () => {
            setFetchStates(await fetchedStates());
        }

        fetchedAPI();

    }, [setFetchStates] );

    console.log(fetchedStates);
    
    return(
        <formControl>
             <NativeSelect>
                <option value='global'>Global</option>
                {fetchedStates.map((state) => <option value='state'>{state}</option>)}

                fetchedS
            </NativeSelect>
        </formControl>
    )
}

export default StatePicker;