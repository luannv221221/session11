import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function ProductSearch() {
    const products = useSelector((state) => {
        return state.product.products;
    })
    return (
        <Container>
            <Row>
                {products.map((item) => {
                    return (
                        <div className="col-lg-4" key={item.id}>
                            <div className="card">
                                <img className="card-img-top" src={item.image} alt="Title" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.productName}</h4>
                                    <p className="card-text">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </Row>
        </Container>
    )
}

export default ProductSearch