import React, { useState } from 'react';
import './App.css';
import {sendDataToAWS} from "./awsService";
import Navbar from "./Navbar";

function FormPage({ onNewRecipe }) {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();





        try {
            const result = await sendDataToAWS({title: title, ingredients: ingredients, instructions: instructions});
            console.log('Data sent successfully:', result);
        } catch (error) {
            console.error("Error sending data", error);
        }
        };


    return (

        <div>
            <Navbar/>
            <div className="form-container">

                <h2>Create a New Recipe</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        id="ingredients"
                        rows="5"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        rows="5"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />


                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        </div>


    );
};


export default FormPage;
