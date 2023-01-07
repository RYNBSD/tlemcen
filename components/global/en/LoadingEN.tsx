import React from 'react'
import Image from 'next/image';

import { loading } from '../../../constants/svgs';

const LoadingEN = () => {
  return (
    <div className='loading'>
        <div className='loading__container f-center'>
            <Image src={loading} alt="Loading animation" />
            <p>Loading...</p>
        </div>
    </div>
  )
}

export default LoadingEN