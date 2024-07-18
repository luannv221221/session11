import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
function LayoutIndex() {
    const navigate = useNavigate();
    const isLogin = Cookies.get("role") ? JSON.parse(Cookies.get("role")) : [];

    useEffect(() => {
        if (!isLogin.some((role) => role.roleName === "ADMIN")) {
            navigate("/logon");
        }
    }, [isLogin])
    return (
        <>
            <div>LayoutIndex</div>
            <Outlet></Outlet>
        </>

    )
}

export default LayoutIndex