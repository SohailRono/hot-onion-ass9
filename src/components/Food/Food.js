import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';

const Food = (props) => {
    const {id,foodname,tagline,price,img} = props.food;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
    <Card.Title>{foodname}</Card.Title>
                <Card.Text>
                    {tagline}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    {price}
                </Card.Text>
            </Card.Footer>
        </Card>
    );
};

export default Food;