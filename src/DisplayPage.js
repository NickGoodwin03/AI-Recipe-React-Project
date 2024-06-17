import React, { useEffect, useState } from 'react';
import './App.css';
import { getDataFromAWS} from './awsService';
import Navbar from './Navbar';

const DisplayPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getDataFromAWS();
                console.log(result);
                setData(result);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="recipes-container">

                <h2>Recipes</h2>
                {data ? (
                    data.map((recipe, index) => (
                        <div>
                            <div key={index} className="recipe">
                                <h3>{recipe.title}</h3>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p><strong>Instructions:</strong> {recipe.instructions}</p>
                            </div>
                            <br/>
                        </div>


                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>


    );
};

export default DisplayPage;
