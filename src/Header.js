import { logDOM } from "@testing-library/react"
import React from "react"
import logo from "./logo.svg"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img src={logo} 
                alt="react logo" 
                width= "180px"
                className="nav-logo"/>
                <h1 calssName="nav-title">React</h1>
                <h3 calssName="nav-subtitle">001 Static Webpage</h3>
                {/* <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
            </nav>
        </header>
    )
}
