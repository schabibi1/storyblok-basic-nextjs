import SbEditable from 'storyblok-react'
import Teaser from './Teaser'

// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
}

const DynamicComponent = ({blok}) => {
  // 🔍🔍🔍 Let's check in the browser console 🔍🔍🔍
  console.log(blok)

  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
  }

  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default DynamicComponent