import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <Col xs="12" sm="6" md="4" lg="4" className="mb-30">
                <div className="product">
                    <Row className="wrapper-product">
                        <Col xs="6" sm="6" md="6" lg="6">
                            <div className="d-flex">
                                <h2 className="title-product">
                                    Product
                                </h2>
                                <p>
                                    Get 20% cash back
                                </p>
                                <Button className="btn-product" color="warning">Buy Now</Button>
                            </div>
                        </Col>
                        <Col xs="6" sm="6" md="6" lg="6">
                            <div className="block-image" style={{backgroundImage: 'url("https://cdn.fptshop.com.vn/Uploads/Mediums/2015/9/23/635785957077892156_z5-compact.png")'}}>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        );
    }
}

export default Product;

                    