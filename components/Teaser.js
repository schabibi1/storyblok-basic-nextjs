import React from 'react'

const Teaser = ({blok}) => {
  // 🔍🔍🔍 Let's check in the browser console 🔍🔍🔍
  console.log(blok)
  return (
    <h2>{blok.headline}</h2>
  )
}

export default Teaser