import React, { useState, useEffect } from 'react';
import {NativeSelect, formControl} from '@material-ui/core'

const StatePicker = () => {
    return(
        <formControl>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </formControl>
    )
}

export default StatePicker;