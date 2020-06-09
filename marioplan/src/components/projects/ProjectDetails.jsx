import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, ab porro aut officia sed fugit ipsa iste nam voluptatum eos. Esse ducimus pariatur deserunt corrupti a at perspiciatis et doloremque?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the net ninja</div>
                    <div>10th October, 9pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
