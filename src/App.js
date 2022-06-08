import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./Header"
import MainContent from "./Main"
import Footer from "./Footer"
import "./style.css"



// function () {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
};

export default App;
