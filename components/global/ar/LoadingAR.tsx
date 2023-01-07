import React from 'react'
import Image from 'next/image';

import { loading } from '../../../constants/svgs';

const LoadingAR = () => {
  return (
    <div className='loading'>
        <div className='loading__container'>
            <Image src={loading} alt="Loading animation" />
            <p>جاري التحميل...</p>
        </div>
    </div>
  )
}

export default LoadingAR