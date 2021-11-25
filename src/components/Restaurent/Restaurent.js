import React, { useState, useEffect } from "react";
import Meal from "../Meal/Meal";

const Restaurent = () => {
    const [searchText,setSearchText] = useState('');
    const [meals,setMeals] = useState([]);
    useEffect(() =>  {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        .catch(err =>console.log("Error reading data"+err));
    },[searchText]);
    const handleSearchMeal = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleSearchMeal} placeholder="Search Your Meal Here" type="text"/>
            <div>
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurent;