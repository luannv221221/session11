import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../../../api/categoryAPI';

function Category() {
    useEffect(() => {
        getAllCategory();
    }, [])
    const dispatch = useDispatch();
    return (
        <div>Category</div>
    )
}

export default Category