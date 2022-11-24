import { React, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import { getQueryProducts } from '../../Actions/index'

import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function SearchBar() {
    const state = useSelector(state => state);
    console.log(state);
    const [nameQuery, setNameQuery] = useState('');
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getQueryProducts(nameQuery));
    },[nameQuery])

    const onSearchChange = (event) => {
        setNameQuery(event.target.value);
    }
    return (
        <div className="searchBar">
            <TextField id="standard-basic" value={nameQuery} onChange={onSearchChange} label="Search Products" variant="standard" useformcontrol="true" />
        </div>
    )
}
