import axios from 'axios';


export const getDataFromAWS = async () => {
    try {
        const response = await axios.get('https://oe4e1sn5s8.execute-api.us-east-1.amazonaws.com/test/retrieveRecipe');
        return response.data;
    } catch (error) {
        console.error("Error fetching data from AWS", error);
        throw error;
    }
};

export const sendDataToAWS = async (data) => {
    const response = await axios.post('https://oe4e1sn5s8.execute-api.us-east-1.amazonaws.com/test/createRecipe', data).then(response => {
        console.log("Response: ", response.data);
    })
        .catch(error => {
            console.error("Error sending data", error);
        })


};
