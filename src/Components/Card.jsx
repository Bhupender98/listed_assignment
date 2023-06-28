import React from 'react'

const Card = (props) => {
  return (
    <div className='card' style={{backgroundColor:props.bgcolor}}>
    <img src="" alt="img"/>
      <p>{props.type}</p>
      <h2>${props.data}</h2>
    </div>
  )
}

export default Card
