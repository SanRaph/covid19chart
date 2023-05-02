import react from 'react';

import {Cards, Chart, StatePicker} from './components';

import Styles from './App.module.css';

import { fetchData } from './api';

class App extends react.Component
{
    state = {
        data: {}
    };

    async componentDidMount(){
        const result = await fetchData();
        this.setState({ data: result });
        
    }

    render(){
        const { data } = this.state;
        return(
            <div className={ Styles.container }>
                <Cards data={ data }/>
                <Chart />
                <StatePicker />
            </div>
                
        )
    }
}

export default App;