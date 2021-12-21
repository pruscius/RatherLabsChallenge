import React from 'react';
import { Link } from 'react-router-dom';
import { getTrivia } from '../../common/redux/actions';
import {  useDispatch } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();

    function handleClick(e) {
        let category = e.target.name;
        dispatch(getTrivia(category))
    }

    return(
        <div> 
            <Link to="/play">
                <button name="historia" onClick={(e) => handleClick(e)}>historia</button>
            </Link>
        </div>
    )
}