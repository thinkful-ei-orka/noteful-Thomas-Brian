import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return <Link to="/">
        <header>
            <h1>Noteful</h1>
        </header>
    </Link>
}