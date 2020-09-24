import React from "react";
import "/Users/kellypowers/coding/my-portfolio/src/App.css";
import Home from "../Sections/Home";
import NavBar from "../NavBar/NavBar"; 
import Contact from "../Sections/Contact";
import Projects from "../Sections/Projects";


function App() 
{
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Projects />
            <Contact />
      </div>
    )
}


export default App;



