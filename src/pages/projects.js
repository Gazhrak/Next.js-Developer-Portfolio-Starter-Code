import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const projects = () => {
  return (
    <>
    <Head>
                <title>MAE | Projects</title>
                <meta name="description" content="Maren's Projects" />
    </Head>

    <main>
        <Layout>
            <AnimatedText text="Projects" className='mb-16'/>
        </Layout>

    </main>
    
    </>
  )
}

export default projects