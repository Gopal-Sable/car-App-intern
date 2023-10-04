import React from 'react'

const Card = ({ car }) => {
    return (
        <div class="card" style={{ "width": "18rem" }}>
            <img src={car.image} class="card-img-top" alt={car.name} />
            <div class="card-body">
                <h5 class="card-title">{car.name}</h5>
                <p>{car.year}</p>
                <p>{car.price}</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card