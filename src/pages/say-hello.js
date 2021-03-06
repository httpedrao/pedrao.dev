import Head from 'next/head'
import Navigation from '../components/Navigation'
import { SectionWrapper } from '../components/Wrapper'

export default function SayHello() {
  return (
    <div>
      <Head>
        <title>pedro who?</title>
        <meta name="description" content="Software Engineer" />
      </Head>

      <SectionWrapper>
      <p style={{color: 'white'}}> 
          Hello
        </p>
        <Navigation />
      </SectionWrapper>
    </div>
  )
}
