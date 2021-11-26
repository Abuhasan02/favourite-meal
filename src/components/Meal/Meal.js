import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";
import {Link,useNavigate } from "react-router-dom";
import "./Meal.css" 

const Meal = (props) => {
    const { idMeal,strMealThumb, strMeal, strInstructions } = props.meal;
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/meal/${idMeal}`);
    }
   
    return (
      <div className="mealStyle">
        <Card
          style={{
            width: "25rem",
            border: "1px solid grey",
            borderRadius: "5px",
          }}
        >
          <Card.Img
            style={{ width: "25rem" }}
            variant="top"
            src={strMealThumb}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
              {strMeal}
            </Card.Title>
            <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
            <Button onClick={handleClick} style={{ marginBottom: "10px" }} variant="primary">
              See Details
            </Button>
            <br />
            <Link to={`/meal/${idMeal}`}>See Details</Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Meal;