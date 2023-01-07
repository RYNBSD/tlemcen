import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeInToBottom, fadeInToLeft, fadeInToRight } from '../../../config/motion';
import { Tlemcen } from '../../../constants/images';

const DescriptionAR = ():JSX.Element => {
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
          <h1>تلمسان</h1>
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
                العاصمة السابقة للمغرب العربي الأوسط، تمزج المدينة بين التأثيرات الأمازيغية والعربية والإسبانية المغاربية والعثمانية والغربية. من فسيفساء التأثيرات هذه، تستمد المدينة لقب عاصمة الفن الأندلسي في الجزائر. وبحسب المؤلف دومينيك ماتيليه، فإن ألقابًا مختلفة تُنسب إلى المدينة بما في ذلك لؤلؤة المغرب العربي وغرناطة الأفريقية والمدينة المنورة في الغرب.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionAR