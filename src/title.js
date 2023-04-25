import React from 'react'

const Title = ({ name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Title
