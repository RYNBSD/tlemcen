import React from 'react'

import { useLanguageContext } from '../context'
import { AR } from '../constants';

const ClientSideError = () => {
  
  const defaultLanguage = useLanguageContext();

  return (
    <div className='CSError'>
      <div className='CSError__container'>
        {
          (defaultLanguage?.language?.toLocaleLowerCase() === AR) ? (
            <>
              <div className='CSError__container-info f-center'>
                <h1>404 خطأ!</h1>
                <p>هذه الصفحة غير موجودة</p>
              </div>
            </>
          ) : (
            <>
              <div className='CSError__container-info f-center'>
                <h1>404 Error!</h1>
                <p>This page does not exist</p>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ClientSideError