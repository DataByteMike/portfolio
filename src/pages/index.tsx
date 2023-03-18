import Head from 'next/head'

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Topic from '@/components/Topic';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Projects from '@/components/Projects';
import Entertainment from '@/components/Entertainment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A Software Engineer who loves programming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Topic />
      <About />
      <Skill />
      <Projects />
      <Entertainment />
      <Contact />
      <Footer />
    </div>
  )
}
