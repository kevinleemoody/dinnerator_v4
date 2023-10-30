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
        <div>
            {meals.map((meal) => (
                <div key={meal.id}>
                    <h2>{meal.name}</h2>
                    {/* Add other meal data here */}
                </div>
            ))}
        </div>
    );
}

export default MealCard;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MealCard() {
//     const [meals, setMeals] = useState([]);

//     useEffect(() => {
//         axios.get('/api/meals') // Use the path to your JSON data
//             .then((response) => {
//                 setMeals(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <div>
//             {meals.map((meal) => (
//                 <div key={meal.id}>
//                     <h2>{meal.name}</h2>
//                     <p>{meal.recipe}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MealCard;


