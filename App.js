import React from "react"
import About from "./components/About.js"
import Info from "./components/Info.js"
import Interests from "./components/Interests.js"
import Mantra from "./components/Mantra.js"

export default function App() {
    return(
    <div className="container">
        <Info />
        <About />
        <Interests />
        <Mantra />
    </div>
    )
}