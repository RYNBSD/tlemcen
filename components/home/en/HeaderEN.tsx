import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { mosqueAgadir } from '../../../constants/images';
import { fadeInToLeft, fadeInToRight } from '../../../config/motion';

const HeaderEN = ():JSX.Element => {
  return (
    <header className='tlemcen__home-header'>
        <div className='tlemcen__home-header_container container'>
            <motion.div
                initial={fadeInToRight.initial}
                whileInView={fadeInToRight.whileInView}
                viewport={fadeInToRight.viewport}
                transition={fadeInToRight.transition(3, 0)}
                className='tlemcen__home-header_container-desc'
            >
                <h1>Culture opens the sense of Beauty</h1>
                
                <div className='tlemcen__home-header_container-desc_btn home-header-explore-btn' role="button">
                    <h2>
                        <a href="#discover">
                            Explore
                        </a>
                    </h2>
                </div>
            </motion.div>
            <motion.div
                initial={fadeInToLeft.initial}
                whileInView={fadeInToLeft.whileInView}
                viewport={fadeInToLeft.viewport}
                transition={fadeInToLeft.transition(3, 0)}
                className="tlemcen__home-header_container-img"
            >
                <Image src={mosqueAgadir} alt="mosque agadir"/>
            </motion.div>
        </div>
    </header>
  )
}

export default HeaderEN