import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [ products ] = useProducts();

    const firstSixProducts = products.filter( product => product._id <= 6 );

    return (
        <Row className="container mx-auto my-5">
            <h2 className="mt-5 text-center fw-bold">Our Products</h2>
            <Row className="g-4">
                {
                    firstSixProducts.map( product => <Product
                        key={ product._id }
                        product={ product }>
                    </Product> )
                }
            </Row>
            <hr className="mt-5 text-danger" />
        </Row >
    );
};

export default Products;