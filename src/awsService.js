import axios from 'axios';
//require('dotenv').config();

const API_URL_CREATE = process.env.REACT_APP_API_URL_CREATE;
const API_URL_RETRIEVE = process.env.REACT_APP_API_URL_RETRIEVE;

export const getDataFromAWS = async () => {
    try {
        console.log(API_URL_RETRIEVE);
        const response = await axios.get(API_URL_RETRIEVE);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from AWS", error);
        throw error;
    }
};

export const sendDataToAWS = async (data) => {
    const response = await axios.post(API_URL_CREATE.toString(), data).then(response => {
        console.log("Response: ", response.data);
    })
        .catch(error => {
            console.error("Error sending data", error);
        })


};
