import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = ({blok}) => {
  console.log(blok.columns.name);
  return (
    <SbEditable content={blok}>
      {blok.name}
    </SbEditable>
  )
}

export default Feature