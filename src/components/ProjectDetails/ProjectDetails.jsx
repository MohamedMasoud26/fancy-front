import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function ProjectDetails() {

    const loc = useLocation();
    const prams = useParams();
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={loc.state.coverImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{loc.state.title}</h5>
                <p className="card-text">{loc.state.description}</p>
                <a  className="btn btn-primary">Details</a>
            </div>
        </div>
  )
}

export default ProjectDetails