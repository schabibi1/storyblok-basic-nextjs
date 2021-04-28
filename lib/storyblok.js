import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'Qs4DvoOQIwGCdIgwOhb3DQtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok