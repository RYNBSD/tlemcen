import React from 'react'

import { MdOutlineWifiTetheringErrorRounded } from 'react-icons/md/index';
import { useThemeContext } from '../../../context';
import { LIGHT } from '../../../constants';

const ConnectionErrorEN = () => {

  const defaultTheme = useThemeContext();

  return (
    <div className='fetchingError'>
      <div className='fetchingError__container f-center'>
        <div className='fetchingError__container-desc f-center'>
          <MdOutlineWifiTetheringErrorRounded
            fontSize={128}
            color={
              (defaultTheme?.theme?.toLowerCase() !== LIGHT) ?
              "#363636" : "#f3f3fe"
            }
          />
          <div>
            <h1>Connection Error!</h1>
            <p>Please make sure that you are connected to the internet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectionErrorEN