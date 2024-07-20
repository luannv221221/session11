import React, { useEffect, useState } from 'react'
import { Header } from 'antd/es/layout/layout'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductSearch } from '../../services/productService';
import useDedounce from '../../hook/useDebounce';
function Menu() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const heandleSearch = (value) => {
        setSearch(value);

        navigate({
            pathname: "search",
            search: createSearchParams({
                q: value
            }).toString()
        })

        if (value == '') {
            navigate("/")
        }

    }

    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page"
                                >Home
                                    <span className="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >Dropdown</a
                                >
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownId"
                                >
                                    <a className="dropdown-item" href="#"
                                    >Action 1</a
                                    >
                                    <a className="dropdown-item" href="#"
                                    >Action 2</a
                                    >
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => heandleSearch(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Menu