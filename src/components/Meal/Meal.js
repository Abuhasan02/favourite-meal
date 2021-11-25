import React from 'react';
import { Card,Button } from "react-bootstrap"; 

const Meal = (props) => {
    const meal = props.meal;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={meal.strMealThumb} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Meal;