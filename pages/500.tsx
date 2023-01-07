import React from 'react'

import { useLanguageContext } from '../context'
import { AR } from '../constants';

const ServerSideError = () => {
  
  const defaultLanguage = useLanguageContext();

  return (
    <div className='CSError'>
      <div className='CSError__container'>
        {
          (defaultLanguage?.language?.toLocaleLowerCase() === AR) ? (
            <>
              <div className='CSError__container-info f-center'>
                <h1>500 خطأ!</h1>
                <p>هناك خطأ في الخادم</p>
              </div>
            </>
          ) : (
            <>
              <div className='CSError__container-info f-center'>
                <h1>500 Error!</h1>
                <p>There is an error in the server</p>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ServerSideError