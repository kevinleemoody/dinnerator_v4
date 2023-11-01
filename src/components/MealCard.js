import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function MealCard() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3003/meals')
            .then((response) => {
                setMeals(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {meals.map((meal) => (
                <div key={meal.id} className="border border-gray-300 rounded p-4">
                    <h2 className="text-xl font-semibold mb-2">{meal.name} with {meal.sidedish}</h2>
                    <h3 className="text-gray-600 mb-2">Ingredients:</h3>
                    <ul className="list-disc ml-4">
                        {meal.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3 className="text-gray-600 mt-2 mb-2">Recipe:</h3>
                    <p>{meal.recipe}</p>
                </div>
            ))}
        </div>
    );
}

export default MealCard;




