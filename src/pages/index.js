import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Layout from '@/components/Layout'
import profilepic from '../../public/images/profile/imagen portfolio2.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Maren`s Portfolio</title>
        <meta name="description" content="Created by Maren Aranburo" />
        
      </Head>
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className="flex items-center justify-between w-full">
          <div className='w-1/3'>
            <Image src={profilepic} alt="Imagen del autor" className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"  />  
          </div>  
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className="text-6xl !text-left"/>
              <p className='my-4 text-base font-medium'> 
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. &#10;
                I am passionate about learning new technologies and applying them to real-world problems.
              </p>
              <div className='flex items-center self-start mt-2'> 
                <Link href="/CV Maren Aranburo.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:border-dark mr-3'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>                
              </div>
          </div>
        </div>
      </Layout>
      <HireMe/>
      
    </main>
    </>
  )
}
