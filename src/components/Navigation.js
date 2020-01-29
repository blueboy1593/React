import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css";

export default function Navigation() {
    return (
        <div className="nav">
            {/* a 태그로 하면 html이 되어버려서 react가 죽고 새로운 페이지가 로딩된다. */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/about"
            // 이런식으로 router link에 정보를 넣어서 갈 수도 있다. 방법은 무궁무진함.
            // {{
            //     pathname: "/about",
            //     state: {
            //         fromNavigation: true
            //     }
            // }}
            >About</Link> 
        </div>
    )
}
