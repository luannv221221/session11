import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutIndex() {
    return (
        <>
            <div>Header</div>
            <Outlet></Outlet>
        </>

    )
}

export default LayoutIndex