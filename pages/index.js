import Head from 'next/head'
import styles from '../styles/Home.module.css'

// The Storyblok Client
import Storyblok from "../lib/storyblok"
import DynamicComponent from '../components/DynamicComponent'
// 👀👀👀 Live preview 👀👀👀
import useStoryblok from "../lib/storyblok-hook"

export default function Home(props) {
  // 👀👀👀 useStoryblok hook 👀👀👀
  const story = useStoryblok(props.story)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
          { story ? story.name : 'My Site' }
        </h1>
      </header>

      <main>
        { story ? story.content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid}/>
        )) : null }
      </main>
    </div>
  )
}

// getStaticProps will be called at build time on server-side
// won't be called on client-side
export async function getStaticProps(context) {
  // the slug of the story
  let slug = "home"
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  // return the story at build time from Storyblok & whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10,
  }
}