import type { historicalInterface } from '../../../../ts/types';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';

import { useGetAllSportPathsQuery } from '../../../../store/reducers/getData';
import { useLanguageContext } from '../../../../context/index';
import { AR } from '../../../../constants';
import { ConnectionErrorAR, ConnectionErrorEN, LoadingAR, LoadingEN } from '../../../../components/global';
import { fadeInToLeft, fadeInToRight } from '../../../../config/motion';

const SportPaths = () => {

    const {
        language
    } = useLanguageContext()!;
    const { data, error, isLoading, isError } = useGetAllSportPathsQuery({ language });
    const [historicalItems, setHistoricalItems] = useState<historicalInterface[]>(data?.items!);

    useEffect(() => {
        setHistoricalItems(data?.items!);
    }, [data?.items, language]);

    if (isLoading) {
        return (
            (language?.toLocaleLowerCase() === AR) ? (
                <LoadingAR />
            ) : (
                <LoadingEN />
            )
        );
    }

    if (error || isError) {
        return (
            (language?.toLocaleLowerCase() === AR) ? (
                <ConnectionErrorAR />
            ) : (
                <ConnectionErrorEN />
            )
        ); 
    }

    return (
        <div className='historicalItems'>
            <div className='historicalItems__container container f-center'>
                {
                    historicalItems?.map((item: historicalInterface, i: number) => (
                        <div className="tlemcen__home-discover_container-element" key={i}>
                            <motion.div
                                className='tlemcen__home-discover_container-element_info'
                                initial={fadeInToRight.initial}
                                whileInView={fadeInToRight.whileInView}
                                viewport={fadeInToRight.viewport}
                                transition={fadeInToRight.transition(3, 0)}
                            >
                                <div className='tlemcen__home-discover_container-element_info-getStarted'>
                                <h1>0{i+1}</h1>
                                <div>
                                    <div />
                                    <h4>
                                        {
                                            language === AR ? "بدأ" : "get started"
                                        }
                                    </h4>
                                </div>
                                </div>
                                <div className='tlemcen__home-discover_container-element_info-title'>
                                <h1>{item.title}</h1>
                                </div>
                                <div className='tlemcen__home-discover_container-element_info-desc'>
                                <h2>{item.description}</h2>
                                </div>
                                <div className='tlemcen__home-discover_container-element_info-readMore'>
                                <h3>
                                    <Link href={`paths/${item.id}`}>
                                        {
                                            language === AR ? "اقرأ المزيد" : "Read more"
                                        }
                                    </Link>
                                </h3>
                                <BsArrowRight fontSize={20} color={"#FBD784"} />
                                </div>
                            </motion.div>
                            <motion.div
                                className='tlemcen__home-discover_container-element_img'
                                initial={fadeInToLeft.initial}
                                whileInView={fadeInToLeft.whileInView}
                                viewport={fadeInToLeft.viewport}
                                transition={fadeInToLeft.transition(3, 0)}
                            >
                                <Image src={`${new Buffer(item.image).toString()}`} alt={item.title} width={250} height={250} />
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SportPaths