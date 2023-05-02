import React from 'react'
import { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from  './LiIcon'

const Details =({degree, school, time, adress}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl'>{degree}&nbsp; | {school}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {adress}
            </span>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "center start"]
    })
    return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details degree="Server side development for Web applications" school="SEPE" time="March 2023-Currently"
                adress="Mª Ana Sanz, Pamplona, Navarra, Spain" />

                <Details degree="Multi-platform Programming Course (Android/HTML5/CSS)" school="Sistema Formación" time="January 2014-March 2014"
                adress="Ansoaín, Navarra, Spain" />

                <Details degree="Course on structured languages (COBOL)" school="Sistema Formación" time="October 2011-January 2012"
                adress="Ansoaín, Navarra, Spain" />
                
                <Details degree="High Technician in Computer Application Development" school="Mª Ana Sanz" time="September 2009-June 2011"
                adress="Pamplona, Navarra, Spain" />

                <Details degree="High Technician in Computer Systems Administration" school="Mª Ana Sanz" time="September 2007-June 2009"
                adress="Pamplona, Navarra, Spain" />

                <Details degree="High Technician in Restauration and Culinary Services " school="CI Burlada" time="September 2004-June 2006"
                adress="Burlada, Navarra, Spain" />
            </ul>
        </div>
    </div>
)
}

export default Education
