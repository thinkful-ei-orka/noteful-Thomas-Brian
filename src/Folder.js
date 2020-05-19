import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

export default function Folder(props) {

    return (
        <Link to={`/folder/${props.id}`}>
            <li className={props.className}>{props.name}</li>
        </Link>
    )
}