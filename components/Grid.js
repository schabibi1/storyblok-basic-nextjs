import React from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => {
  // console.log(blok.component)
  // console.log(blok.columns[0].name)
  return (
    <SbEditable content={blok}>
      <DynamicComponent blok={blok.component}>
        {blok.columns[0].name}
      </DynamicComponent>
    </SbEditable>
  )
}

export default Grid