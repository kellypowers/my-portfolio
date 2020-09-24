import React, { Component } from 'react';
import Project from './Project';

export default class Projects extends Component {

    render() {
        return (
            <div className="projects-section" id="projects">
                <h1>Projects</h1>
                <div className="projects-container" >
                    <div className="project">
                        <Project 
                        title="Zodiac CLI Application"
                        // gif={}
                        // screenshot={}
                        projectDescription="Object Oriented Ruby to make classes and CLI interface. Scraped zodiac API webpage for zodiac details and wrote functions for determining zodiac sign based on user input."
                        githubCode="https://github.com/kellypowers/zodiac"
                        // demoVideo="https://drive.google.com/file/d/1vYQVVrGpTT6GynmveUcQ15hQGcjsdQZF/view?usp=sharing"
                        />
                    </div>
                    <div className="project">
                        <Project 
                        title="Flatiron Fitness"
                        // gif={}
                        // screenshot={}
                        projectDescription="A fitness logging app to create and reach workout goals. MVC application structure in Sinatra. CRUD functionality. Uses bcrypt for login and sign-up. Backend database includes has_many and belongs_to and join table relationships."
                        githubCode="https://github.com/kellypowers/flatironfitness"
                        // demoVideo="https://drive.google.com/file/d/1aPZWYoZmPauIj5fVqMmOlf6lRh1S2Y5e/view?usp=sharing"
                        />
                    </div>
                    <div className="project">
                        <Project 
                        title="PlannerTrip"
                        // gif={}
                        // screenshot={}
                        projectDescription="Application to search for events in cities and add events to plan trips. Ruby on Rails API backedn with endpoints for locations, events and users. Able to login through Facebook with omniauth gem"
                        githubCode="https://github.com/kellypowers/plannertrip"
                        // demoVideo=""
                        />
                    </div>
                    <div className="project">
                        <Project 
                        title="mkchar"
                        // gif={}
                        // screenshot={}
                        projectDescription="Single page application that generated Dungeons and Dragons character based on game rules. JaveScript frontend with Rails backend."
                        githubCode="https://github.com/kellypowers/mkchar"
                        // demoVideo=""
                        />
                    </div>
                    <div className="project">
                        <Project 
                        title="Smite App"
                        // gif={}
                        // screenshot={}
                        projectDescription="Web application to view information on the game Smite including looking up player statistics. Rails API backend, React frontend with Redux. Makes calls to Smite API to fetch information and display on RESTful routes."
                        githubCode="https://github.com/kellypowers/smite-app"
                        // demoVideo=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}
