import React from 'react'

const Teaser = ({blok}) => {
  console.log(blok)
  return (
    <div>
      <h2>{blok.headline}</h2>
    </div>
  )
}

export default Teaser