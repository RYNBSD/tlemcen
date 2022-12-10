import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeInToBottom, fadeInToLeft, fadeInToRight } from '../../config/motion';
import { Tlemcen } from '../../constants/images';

const Description = ():JSX.Element => {
  return (
    <section className='tlemcen__home-description'>
      <div className='tlemcen__home-description_container container'>
        <motion.div
          className="tlemcen__home-description_container-title"
          initial={fadeInToBottom.initial}
          whileInView={fadeInToBottom.whileInView}
          viewport={fadeInToBottom.viewport}
          transition={fadeInToBottom.transition(1.5, 0)}
        >
          <h1>Tlemcen</h1>
        </motion.div>
        <div className='tlemcen__home-description_container-info'>
          <motion.div
            className='tlemcen__home-description_container-info_img'
            initial={fadeInToLeft.initial}
            whileInView={fadeInToLeft.whileInView}
            viewport={fadeInToLeft.viewport}
            transition={fadeInToLeft.transition(3, 0)}
          >
            <Image src={Tlemcen} alt="Tlemcen"/>
          </motion.div>
          <motion.div
            className="tlemcen__home-description_container-info_desc"
            initial={fadeInToRight.initial}
            whileInView={fadeInToRight.whileInView}
            viewport={fadeInToRight.viewport}
            transition={fadeInToRight.transition(3, 0)}
          >
            <h3>
              Former <span>capital of the central Maghreb</span>, the city mixes Berber, Arab, Hispano-Moorish, Ottoman, and Western influences. From this mosaic of influences, the city derives the title of capital of Andalusian art in Algeria. According to the author Dominique Mataillet, various titles are attributed to the city including <span>the pearl of the Maghreb</span>, <span>the African Granada</span> and <span>the Medina of the West</span>.
              </h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Description