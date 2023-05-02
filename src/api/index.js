import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users'

//options not used
const options = {
    method: 'GET',
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
    params: {country: 'Nigeria'},
    headers: {
        'X-RapidAPI-Key': '796ac1131bmshae009ad2822dfeap123fd2jsne889d36cc05c',
        'X-RapidAPI-Host': 'nigeriancdcapi.p.rapidapi.com'
    }
};


export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL)
        return response;
    } catch (error) {
    }

};

export const fetchDailyData = async() => {
    try {
        const response = await axios.get(`${API_URL}/1/todos`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error.message);
    }

};