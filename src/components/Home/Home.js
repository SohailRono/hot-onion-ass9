import React, { useState } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import fakeData from '../../fakeData/Index';
import Food from '../Food/Food';
import Banner from '../Header/Banner';

const Home = () => {
    const [foods, setFoods] = useState(fakeData);

    return (
        <div>
            <Banner></Banner>
            <Card>
                <Card.Body>
                    <Tabs defaultActiveKey="lunch" id="uncontrolled-tab-example">
                        <Tab eventKey="breakfast" title="Breakfast">
                            {
                                foods.map(f => <Food food={f}></Food>)
                            }
                        </Tab>
                        <Tab eventKey="lunch" title="Lunch">

                        </Tab>
                        <Tab eventKey="dinner" title="Dinner" >

                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Home;