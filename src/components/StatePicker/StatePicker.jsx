import React, { useState, useEffect } from 'react';

import { formControl, NativeSelect } from '@material-ui/core';

import Styles from './StatePicker.module.css';

const StatePicker = () => {
    const [fetchedState, setFetchStates] = useState([]);

    
    return(
        <formControl>
             <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </formControl>
    )
}

export default StatePicker;