import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { useLocation } from 'react-router-dom'
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products } = productList;
    const location = useLocation()



    let keyword = location.search

    useEffect(() => {
        dispatch(listProducts(keyword));
    }, [dispatch, keyword]);

    return (
        <div>
            {!keyword && <ProductCarousel />}
            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ?
                    <Message variant='danger'>{error}</Message>
                    :
                    (
                        <Row>
                            {products.map((products) => (
                                <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={products} />
                                </Col>
                            ))}
                        </Row>
                    )
            }
        </div>
    );
}

export default HomeScreen;
