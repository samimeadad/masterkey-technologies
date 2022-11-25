import React from 'react';
import { Card, Col, } from 'react-bootstrap';

const Product = ( props ) => {
    const { name, picture, price, discount } = props.product;

    return (
        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            {/* card for each product */ }
            <Card style={ { width: '18rem' } }>
                <Card.Img variant="top" src={ picture } />
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text>
                        <h6>Price:$ { price }</h6>
                        <p>Discount: { discount }</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;