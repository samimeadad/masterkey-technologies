import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BannerText from './BannerText';
import Products from './Products';

const Hotdeals = () => {
    return (
        <div className="container">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <BannerText></BannerText>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                    <Products></Products>
                </Col>
            </Row>
        </div>
    );
};

export default Hotdeals;