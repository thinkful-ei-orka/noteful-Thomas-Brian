import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

export default function Folder(props) {

    return (
        <Link to={`/folder/${props.id}`}>
            <p className={props.className}>{props.name}</p>
        </Link>
    )
}