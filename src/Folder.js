import React from 'react';
import './Folder.css';

export default function Folder(props) {

    return(
        <li className='listFolder'>{props.name}</li>
    )
}