import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = ({blok}) => {
  const columns = blok.columns
  return (
    <SbEditable content={blok} key={blok._uid}>
      <ul>
        <li>
          {/* {columns.map(column => column.name)} */}
        </li>
      </ul>
    </SbEditable>
  )
}

export default Feature