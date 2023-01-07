import React from 'react'

import {
  HeaderEN, DescriptionEN, DiscoverEN, FeaturesEN,
  HeaderAR, DescriptionAR, DiscoverAR, FeaturesAR,
} from '../components/home/index';
import { useLanguageContext } from '../context';
import { AR } from '../constants';

const Home = () => {
  const defaultLanguage = useLanguageContext();

  return (
    <div>
      {
        (defaultLanguage?.language?.toLocaleLowerCase() === AR) ? (
          <>
            <HeaderAR />
            <DescriptionAR />
            <FeaturesAR />
            <DiscoverAR />
          </>
        ) : (
          <>
            <HeaderEN />
            <DescriptionEN />
            <FeaturesEN />
            <DiscoverEN />
          </>
        )
      }
    </div>
  );
  

}

export default Home;