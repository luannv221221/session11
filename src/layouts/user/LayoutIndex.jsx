
import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
function LayoutIndex() {
    return (
        <>
            <Menu />
            <Outlet></Outlet>
        </>

    )
}

export default LayoutIndex