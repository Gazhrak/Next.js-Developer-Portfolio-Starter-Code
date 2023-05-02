import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Image from 'next/image';
import Skills from '@/components/Skills';
import ProfilePic from '../../public/images/profile/Foto Carnet.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion'



const AnimatedNumbers =({value}) => {
const ref = useRef(null)

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration:3000 });
const isInview = useInView(ref, {once:true});

useEffect(() => {
    if(isInview){
        motionValue.set(value)
    }
},[isInview, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0)
        }
    })
},[springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <div>
            <Head>
                <title>MAE | About me</title>
                <meta name="description" content="about Maren" />
            </Head>
            <main className='flex w-full fex-col items-center justify-center'>
                <Layout className='pt-16'>
                <AnimatedText text="Always learning, growing, evolving!" className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75' >About me</h2>
                        <p className="font-medium ">
                        Hi there! I`m Maren Aranburo, a fullstack .net developer with a passion for creating high-quality,
                        user-centered digital experiences. I`m currently expanding my skillset by learning React, 
                        and I`m excited to see where this new knowledge will take me.
                        </p>
                        <p className="my-4 font-medium ">
                        For me, development is not just about writing code, it`s about solving problems and creating intuitive,
                        enjoyable experiences for users. Whether I`m building a website or a mobile app,
                        I always strive for design excellence and user-centered thinking.
                        </p>
                        <p className="font-medium ">
                        I`m confident that my experience, skills, and dedication to excellence will make me a valuable
                        asset to any project. Let`s work together to bring your vision to life!
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 ">
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark '/>
                        <Image src={ProfilePic} alt="Maren" className="w-full h-auto rounded-2xl"/> 
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Fullstack experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Years working with SQL databases</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={10}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects successfully delivered</h2>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
                </Layout>                
            </main>
        </div>
    )
}

export default About;