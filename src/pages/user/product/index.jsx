import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useDedounce from '../../../hook/useDebounce';
import { getProductSearch } from '../../../services/productService';

function ProductSearch() {
    const [searchParams] = useSearchParams();
    const keyowrd = searchParams.get('q'); // "testCode"
    const debounceSearch = useDedounce(keyowrd, 1000);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (keyowrd == null) {
        navigate("/")
    }
    useEffect(() => {
        dispatch(getProductSearch({ searchText: keyowrd }));
    }, [debounceSearch]);
    const products = useSelector((state) => {
        return state.product.products;
    });

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