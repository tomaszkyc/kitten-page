import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import "./style.css"
/**
 * Components: 
 * Info
 * About 
 * Interests
 * Footer
 * 
 */

export default function App() {
    return (
        <main>
            <div className="app--container">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </main>

    )
}