import React from 'react'
import { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from  './LiIcon'

const Details =({position, company, time, adress, work}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; | {company}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {adress}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "center start"]
    })
    return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="Head Chef" company="Multiple restaurants" time="March 2019-December 2022"
                adress="Navarra, Spain" work="Head Chef. Responsible for designing and creating the culinary offerings of the establishment, ensuring the quality control of the final product, 
                managing and supervising the kitchen team, as well as monitoring orders and inventory."/>

                <Details position="Fullstack Developer" company="Government of Navarra" time="March 2017-December 2018"
                adress="Sarriguren, Navarra, Spain" work=".Net Fullstack developer, using C#, entity Framework, HTML5,
                CSS and MSSQL to develop web applications for Navarra's public healthcare system. All developed using agile methodologies such as SCRUM and Kanban."/>

                <Details position="Junior FullStack Developer" company="D2D" time="July 2014-March 2017"
                adress="Mutilva, Navarra, Spain" work="Programming web applications with AngularJS, HTML, CSS, Java 8 with Spring and MySQL for multiple international customers. 
                Skilled in using version control software Subversion and agile methodologies such as SCRUM."/>
                
                <Details position="Junior Developer" company="Incita" time="March 2012-July 2013"
                adress="Artica, Navarra, Spain" work="COBOL backend development for clients in the financial/banking environment using agile methodologies."/>

                <Details position="Chef" company="Multiple restaurants" time="April 2006-September 2008"
                adress="Pamplona, Navarra, Spain" work="Preparation and presentation of desserts and ice creams. Preparation and presentation of appetizers and garnishes for meat and fish dishes.
                Responsible for monitoring inventory levels in the storage area."/>
            </ul>
        </div>
    </div>
)
}

export default Experience
