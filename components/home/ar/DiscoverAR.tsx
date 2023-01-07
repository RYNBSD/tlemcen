import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';

import { fadeInToBottom, fadeInToLeft, fadeInToRight } from '../../../config/motion';
import { discoverDataAR } from '../../../constants';

const DiscoverAR = ():JSX.Element => {

  const randomRoutes = () => {
    const routes = ['/explore/historical', '/explore/touristic', '/explore/sport/paths'];

    return routes[Math.floor((Math.random() * 10) % 3)];
  }

  return (
    <section className='tlemcen__home-discover' id='discover'>
      <div className='tlemcen__home-discover_container container'>
        <motion.div
          className="tlemcen__home-discover_container-title"
          initial={fadeInToBottom.initial}
          whileInView={fadeInToBottom.whileInView}
          viewport={fadeInToBottom.viewport}
          transition={fadeInToBottom.transition(1.5, 0)}
        >
          <h1>اكتشف</h1>
        </motion.div>
        {
          discoverDataAR.map((discover, index) => (
            <div className="tlemcen__home-discover_container-element" key={index}>
              <motion.div
                className='tlemcen__home-discover_container-element_info'
                initial={fadeInToRight.initial}
                whileInView={fadeInToRight.whileInView}
                viewport={fadeInToRight.viewport}
                transition={fadeInToRight.transition(3, 0)}
              >
                <div className='tlemcen__home-discover_container-element_info-getStarted'>
                  <h1>0{index+1}</h1>
                  <div>
                    <div />
                    <h4>ابد</h4>
                  </div>
                </div>
                <div className='tlemcen__home-discover_container-element_info-title'>
                  <h1>{discover.title}</h1>
                </div>
                <div className='tlemcen__home-discover_container-element_info-desc'>
                  <h2>{discover.desc}</h2>
                </div>
                <div className='tlemcen__home-discover_container-element_info-readMore'>
                  <h3>
                    <Link href={`${randomRoutes()}`}>
                      اقرأ المزيد
                    </Link>
                  </h3>
                  <BsArrowRight fontSize={20} color={"#FBD784"} />
                </div>
              </motion.div>
              <motion.div
                className='tlemcen__home-discover_container-element_img'
                initial={fadeInToLeft.initial}
                whileInView={fadeInToLeft.whileInView}
                viewport={fadeInToLeft.viewport}
                transition={fadeInToLeft.transition(3, 0)}
              >
                <Image src={discover.img} alt={discover.title} />
              </motion.div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DiscoverAR