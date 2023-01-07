import React from 'react'

import { MdOutlineWifiTetheringErrorRounded } from 'react-icons/md/index';
import { useThemeContext } from '../../../context';
import { LIGHT } from '../../../constants';

const ConnectionErrorAR = () => {

  const defaultTheme = useThemeContext();

  return (
    <div className='fetchingError'>
      <div className='fetchingError__container'>
        <div className='fetchingError__container-desc f-center'>
          <MdOutlineWifiTetheringErrorRounded
            fontSize={128}
            color={
              (defaultTheme?.theme?.toLowerCase() !== LIGHT) ?
              "#363636" : "#f3f3fe"
            }
          />
          <div>
            <h1>خطأ الاتصال!</h1>
            <p>يرجى التأكد من اتصالك بالإنترنت.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectionErrorAR