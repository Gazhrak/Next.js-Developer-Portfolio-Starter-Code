import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const About = () => {
    return (
        <div>
            <Head>
                <title>MAE | About me</title>
                <meta name="description" content="about Maren" />
            </Head>
            <main className='flex w-full fex-col items-center justify-center'>
                <Layout className='pt-16'>
                <AnimatedText text="Always learning, growing, evolving!"/>
                <div className='grid w-full grid-cols-4 gap-16'>
                    <div className='col-span flex flex-col item-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75' >About me</h2>
                        <p classname="font-medium ">
                        Hi there! I`m Maren Aranburo, a fullstack .net developer with a passion for creating high-quality,
                        user-centered digital experiences. I`m currently expanding my skillset by learning React, 
                        and I`m excited to see where this new knowledge will take me.
                        </p>
                        <p classname="my-6 font-medium ">
                        For me, development is not just about writing code, it`s about solving problems and creating intuitive,
                        enjoyable experiences for users. Whether I`m building a website or a mobile app,
                        I always strive for design excellence and user-centered thinking.
                        </p>
                        <p classname="font-medium ">
                        I`m confident that my experience, skills, and dedication to excellence will make me a valuable
                        asset to any project. Let`s work together to bring your vision to life!
                        </p>
                    </div>
                </div>
                </Layout>

                
            </main>
        </div>
    )
}

export default About;