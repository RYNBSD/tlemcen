import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

//Icons
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';
import { HiSun } from '@react-icons/all-files/hi/HiSun';
import { HiMoon } from '@react-icons/all-files/hi/HiMoon';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';

import { useThemeContext, useLanguageContext, useAdminContext } from '../../../context';
import { tlemcenLogoDark, tlemcenLogoLight } from '../../../constants/images';
import { LIGHT, AR, EN } from '../../../constants';

const NavbarAR = ():JSX.Element => {

  const currentTheme = useThemeContext();
  const defaultLanguage = useLanguageContext();
  const isAdmin = useAdminContext();

  const [activeMenu, setActiveMenu] = useState(false);

  const toggleActive = () => {
    setActiveMenu(prevActiveMenu => !prevActiveMenu);
  }

  return (
    <nav className='tlemcen__nav'>
      <div className='tlemcen__nav-navigation container'>
        <div className='tlemcen__nav-navigation_img'>
          {
            (currentTheme?.theme !== LIGHT) ?  <Image src={tlemcenLogoDark} alt="tlemcen logo dark" width="334" height="100"loading="lazy" />
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
            <h2>الصفحة الرئيسية</h2>
          </Link>
        </div>
        <div className="tlemcen__nav-list_choices">
          <div>
            <h2>استكشف</h2>
            <IoIosArrowBack fontSize={20} />
          </div>
          <ul>
            <li>
              <Link href="/explore/historical">
                <h3>التاريخية</h3>
              </Link>
            </li>
            <li>
              <Link href="/explore/touristic">
                <h3>السياحية</h3>
              </Link>
            </li>
            <li>
              <Link href="/explore/sport/paths">
                <h3>مسارات رياضية</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className="tlemcen__nav-list_choices">
          <div>
            <h2>لغات</h2>
            <IoIosArrowBack fontSize={20} />
          </div>
          <ul>
            <li>
              <input type="button" value="العربية" onClick={() => defaultLanguage?.toggleLanguage(AR)} />
            </li>
            <li>
              <input type="button" value="English" onClick={() => defaultLanguage?.toggleLanguage(EN)} />
            </li>
            <li>
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
        {
          isAdmin?.isAdmin && (
            <div className="tlemcen__nav-list_choices">
              <div>
                <h2>مشرف</h2>
                <IoIosArrowBack fontSize={20} />
              </div>
              <ul>
                <li>
                  <Link href='/admin/historical'>
                    <h3>عناصر تاريخية</h3>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/touristic'>
                    <h3>عناصر السياحية</h3>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/sport/paths'>
                    <h3>عناصر المسارات الرياضية</h3>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/historical/new'>
                    <h3>تاريخي جديد</h3>
                  </Link>
                </li>
                <li>
                  <Link href='/admin/touristic/new'>
                    <h3>سياحي جديد</h3>
                  </Link>                  
                </li>
                <li>
                  <Link href='/admin/sport/paths/new'>
                    <h3>مسارات رياضية جديدة</h3>
                  </Link>                  
                </li>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default NavbarAR