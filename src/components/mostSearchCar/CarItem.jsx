import React from 'react'

function CarItem({car}) {
  return (
    <div>
        <img src={car?.image} height={250} width={300} alt="" />
        <div className="div">
            <h1>{car?.name}</h1>
        </div>
    </div>
  )
}

export default CarItem
