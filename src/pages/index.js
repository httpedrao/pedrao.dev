import Head from 'next/head'
import Navigation from '../components/Navigation'
import { SectionWrapper } from '../components/Wrapper'

export default function Home() {
  return (
    <div>
      <Head>
        <title>pedro who?</title>
        <meta name="description" content="Software Engineer" />
      </Head>
      <SectionWrapper>
        <div />
        <Navigation/>
      </SectionWrapper>
    </div>
  )
}
