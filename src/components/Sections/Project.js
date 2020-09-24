import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false }
    }
    handleOnClick = () => {
        this.state.clicked === false ? this.setState({clicked: true}) : this.setState({clicked: false});
    }
    

    
    render() {
        if (this.state.clicked === 'false') {
            return (
                <div className="project-unclicked" >
                    <img onClick={this.handleOnClick} className="project-img" src={this.props.gif} alt="project-img"></img>
                </div>
            )
        } else {
            return (
                <div className="project-clicked" >
                    <img src={this.props.screenshot} onClick={this.handleOnClick} alt="project" />
                    <h3 className="project-name">{this.props.projectName}</h3>
                    <p className="project-description">{this.props.projectDescription}</p>
                    <a href={this.props.githubCode} >Code</a>
                    {/* <a href={this.props.demoVideo} >Demo Video</a> */ }
                    {/* demo video should be a link to demo on heroku or aws or something */}
                </div>
            )
        }
    }


// here i want there to be a screenshot, then when clicked goes to gif? and info? or 
// gif of project, click and it goes into the corner of the area with animation, and the details are there

}