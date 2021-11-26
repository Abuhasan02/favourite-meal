import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import './Mealdetails.css';

const MealDetails = () => {
    const {idMeal} = useParams();
    const [mealDetails,setMealDetails] = useState([]);
    const { strMeal, strMealThumb, strCategory, strInstructions } = mealDetails;
    useEffect(() => {
        const url =
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => setMealDetails(data.meals[0]));
    },[])
    return (
      <div>
        <div className="mealDetails">
          <img src={strMealThumb} alt="" />
          <h1>Dish Name:{strMeal}</h1>
          <h4>Category:{strCategory}</h4>
          <h5 style={{underline:'2px',fontSize:'20px'}}>Description</h5>
          <p>{strInstructions}</p>
        </div>
      </div>
    );
};

export default MealDetails;