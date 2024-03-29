import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Card = ({mascota}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <img className="bd-placeholder-img card-img-top" width="100%" src = {mascota.image} alt = "imagen"/>
      <h3 className = "mb-0 text-dark"> {mascota.name} </h3>
      <div className="card-body">
        <p className="card-text"> Status: {mascota.location.name} <br/> Especie: {mascota.species} <br/> Genero: {mascota.gender}. </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary" 
            >
            <Link to = {`/details/${mascota.id}`} className = "nav-link">
              Details
            </Link>
            </button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
