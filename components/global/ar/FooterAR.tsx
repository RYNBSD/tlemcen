import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';

//Icons
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { fadeInToLeft, fadeInToTop } from '../../../config/motion';
import { tlemcenLogoLight, tlemcenLogoDark } from '../../../constants/images';
import { useThemeContext } from '../../../context/theme';
import { LIGHT } from '../../../constants';

const FooterAR = () => {

  const currentTheme = useThemeContext();

  return (
    <footer className='tlemcen__footer'>
      <div className="tlemcen__footer-info container">
        <motion.div
          className="tlemcen__footer-info_socialMedia"
          initial={fadeInToLeft.initial}
          whileInView={fadeInToLeft.whileInView}
          viewport={fadeInToLeft.viewport}
          transition={fadeInToLeft.transition(1, 0)}
        >
          {
            !(currentTheme?.theme === LIGHT) ?  <Image src={tlemcenLogoDark} alt="tlemcen logo dark" width="334" height="100" loading="lazy" />
              : <Image src={tlemcenLogoLight} alt="tlemcen logo light" width="334" height="100" loading="lazy" />
          }
          <div className='tlemcen__footer-info_socialMedia-icons'>
            <FaFacebook fontSize={35}/>
            <FaInstagram fontSize={35}/>
            <FaTwitter fontSize={35}/>
          </div>
        </motion.div>
        <motion.div
          className="tlemcen__footer-info_contact"
          initial={fadeInToLeft.initial}
          whileInView={fadeInToLeft.whileInView}
          viewport={fadeInToLeft.viewport}
          transition={fadeInToLeft.transition(1, 0.25)}
        >
          <div className='tlemcen__footer-info_contact-title'>
            <h1>اتصل بنا</h1>
          </div>
          <div className='tlemcen__footer-info_contact-ways'>
            <div className='tlemcen__footer-info_contact-ways_way'>
              <FiMail fontSize={25}/>
              <p>elassalatlemcen@gmail.com</p>
            </div>
            <div className='tlemcen__footer-info_contact-ways_way'>
              <FaPhone fontSize={25}/>
              <p>+213 771 52 49 20</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="tlemcen__footer-info_more"
          initial={fadeInToLeft.initial}
          transition={fadeInToLeft.transition(1, 0.5)}
          whileInView={fadeInToLeft.whileInView}
          viewport={fadeInToLeft.viewport}
        >
          <div className="tlemcen__footer-info_more-title">
            <h1>المزيد من المعلومات</h1>
          </div>
          <div className="tlemcen__footer-info_more-info">
            <ul>
              <li>
                <Link href="/about-us">
                  <p>عنا</p>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className='tlemcen__footer-separator'/>
      <motion.div
          initial={fadeInToTop.initial}
          whileInView={fadeInToTop.whileInView}
          viewport={fadeInToTop.viewport}
          transition={fadeInToTop.transition(1.5, 0)}
        className="tlemcen__footer-copyRights"
      >
        <h2>
          &copy; 2022 Arts AND Creafts Tlemcen، Inc. كل الحقوق محفوظة
        </h2>
      </motion.div>
    </footer>
  )
}

export default FooterAR