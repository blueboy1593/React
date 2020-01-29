import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            {/* a 태그로 하면 html이 되어버려서 react가 죽고 새로운 페이지가 로딩된다. */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
