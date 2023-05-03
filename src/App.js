import react from 'react';

import {Cards, Chart, StatePicker} from './components';

import Styles from './App.module.css';

import { fetchData } from './api';

class App extends react.Component
{
    state = {
        data: {},
        state: ''
    };

    async componentDidMount(){
        const result = await fetchData();
        this.setState({ data: result });
        
    }

    handleStateChange = () => {

    };


    render(){
        const { data } = this.state;
        return(
            <div className={ Styles.container }>
                <Cards data={ data }/>
                <Chart />
                <StatePicker handleStateChange={this.handleStateChange }/>
            </div>
                
        )
    }
}

export default App;