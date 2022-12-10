import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Icons
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';
import { HiSun } from '@react-icons/all-files/hi/HiSun';
import { HiMoon } from '@react-icons/all-files/hi/HiMoon';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';

import { useThemeContext } from '../../context/theme';
import { tlemcenLogoDark, tlemcenLogoLight } from '../../constants/images';
import { LIGHT } from '../../constants';

const Navbar = ():JSX.Element => {

  const currentTheme = useThemeContext();
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleActive = () => {
    setActiveMenu(prevActiveMenu => !prevActiveMenu);
  }

  return (
    <nav className='tlemcen__nav'>
      <div className='tlemcen__nav-navigation container'>
        <div className='tlemcen__nav-navigation_img'>
          {
            !(currentTheme?.theme === LIGHT) ?  <Image src={tlemcenLogoDark} alt="tlemcen logo dark" width="334" height="100"loading="lazy" />
              : <Image src={tlemcenLogoLight} alt="tlemcen logo light" width="334" height="100" loading="lazy" />
          }
        </div>
        <div className='tlemcen__nav-navigation_options'>
          <div className='tlemcen__nav-navigation_options-theme'>
            <button onClick={() => currentTheme?.toggleTheme()} type="button">
            {
              !(currentTheme?.theme === LIGHT) ? <HiMoon fontSize={30} />
                : <HiSun fontSize={30} />
            }
            </button>
          </div>
          <div className='tlemcen__nav-navigation_options-menu'>
            <button type="button">
              <FiMenu
                fontSize={30}
                onClick={toggleActive}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={`tlemcen__nav-list ${activeMenu ? 'active' : ''}`}>
        <div className="tlemcen__nav-list_close">
          <div
            role="button"
            onClick={toggleActive}          
          >
            <IoMdClose
              fontSize={35}
            />
          </div>
        </div> 
        <div className="tlemcen__nav-list_router">
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </div>
        <div className="tlemcen__nav-list_choices">
          <div role="button">
            <h2>Explore</h2>
            <IoIosArrowBack fontSize={20}/>
          </div>
          <ul>
            <li>
              <h3>Historical Sites</h3>
            </li>
            <li>
              <h3>Touristic Sites</h3>
            </li>
            <li>
              <h3>Sports Paths</h3>
            </li>
            <li>
              <h3>Popular customs and traditions</h3>
            </li>
          </ul>
        </div>
        <div className="tlemcen__nav-list_choices">
          <div id="google_translate_element"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar