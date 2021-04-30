import React from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => {
  console.log(blok)
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div />
      {/* <DynamicComponent>{blok.component}</DynamicComponent> */}
    </SbEditable>
  )
}

export default Grid