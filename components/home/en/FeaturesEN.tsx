import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { mansourah } from "../../../constants/images";
import { featuresDataEN } from '../../../constants';

import { fadeInToBottom, fadeInToTop, fadeInToRight } from '../../../config/motion';

const FeaturesEN = ():JSX.Element => {
  return (
    <section className='tlemcen__home-features'>
      <div className='tlemcen__home-features_container container'>
        <motion.div
          className="tlemcen__home-features_container-title"
          initial={fadeInToBottom.initial}
          whileInView={fadeInToBottom.whileInView}
          viewport={fadeInToBottom.viewport}
          transition={fadeInToBottom.transition(1.5, 0)}
        >
          <h1>Features</h1>
        </motion.div>
        <div className='tlemcen__home-features_container-details'>
          <motion.div
            className='tlemcen__home-features_container-details_img'
            initial={fadeInToRight.initial}
            whileInView={fadeInToRight.whileInView}
            viewport={fadeInToRight.viewport}
            transition={fadeInToRight.transition(3, 0)}
          >
            <Image src={mansourah} alt="Mansourah" />
          </motion.div>
          <div className='tlemcen__home-features_container-details_info'>
            {
              featuresDataEN.map((feature, index) => (
                <motion.div
                  className='tlemcen__home-features_container-details_info-element'
                  key={index}
                  initial={fadeInToTop.initial}
                  whileInView={fadeInToTop.whileInView}
                  viewport={fadeInToTop.viewport}
                  transition={fadeInToTop.transition(1, index/3)}
                >
                  <feature.icon fontSize={50} />
                  <h1>{feature.title}</h1>
                  <p>{feature.description}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesEN