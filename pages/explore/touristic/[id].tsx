import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

import { isNum } from '../../../ts/tools';
import { useGetTouristicByIDQuery } from '../../../store/reducers/getData';
import type { historicalInterface } from '../../../ts/types';
import { AR, EN } from '../../../constants';
import { ConnectionErrorAR, ConnectionErrorEN, LoadingAR, LoadingEN } from '../../../components/global';
import { useLanguageContext } from '../../../context';
import { fadeInToLeft, fadeInToRight } from '../../../config/motion';

const HistoricalItem = () => {

    const { language }:{ language: string } = useLanguageContext()!;
    const router = useRouter();
    const { id } = router.query;
    
    const params: { language: string, id: number } = {
        language: String(language as string),
        id: parseInt(id as string),
    }

    useEffect (() => {
        if (language !== EN && language !== AR) {
            alert("Invalid Language");
            router.push('/');
        }
    }, [id, language, router]);
    
    const { data, isLoading, isError, error } = useGetTouristicByIDQuery(params);
    
    
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

    if (!isNum.test(id as string)) {
        router.push('/');
    }
                
    return (
        <div className='historicalItem'>
            <div className="historicalItem__container container f-center">
                <div className="historicalItem__container-info">
                    <motion.div
                        className="historicalItem__container-info_left"
                        initial={fadeInToRight.initial}
                        whileInView={fadeInToRight.whileInView}
                        viewport={fadeInToRight.viewport}
                        transition={fadeInToRight.transition(3, 0)}
                    >
                        <h1>{data?.item[0]?.title}</h1>
                        <p>{data?.item[0]?.description}</p>
                        <a href={`${data?.item[0]?.link_to_read_more}`}>{
                        (language?.toLowerCase() === AR) ? "اقرأ المزيد" : "Read more"
                        }</a>
                    </motion.div>
                    <motion.div
                        className="historicalItem__container-info_right"
                        initial={fadeInToLeft.initial}
                        whileInView={fadeInToLeft.whileInView}
                        viewport={fadeInToLeft.viewport}
                        transition={fadeInToLeft.transition(3, 0)}
                    >
                        <Image src={`${new Buffer(data?.item[0]?.image).toString()}`} alt={data?.item[0]?.title || "Image"}  width={250} height={250} />
                    </motion.div>
                </div>
                <div className="historicalItem__container-info">
                    <motion.div
                        className="historicalItem__container-info_left"
                        initial={fadeInToRight.initial}
                        whileInView={fadeInToRight.whileInView}
                        viewport={fadeInToRight.viewport}
                        transition={fadeInToRight.transition(3, 0)}
                    >
                        <iframe src={data?.item[0]?.map_source} width="100%" height="350" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                    <motion.div
                        className="historicalItem__container-info_right"
                        initial={fadeInToLeft.initial}
                        whileInView={fadeInToLeft.whileInView}
                        viewport={fadeInToLeft.viewport}
                        transition={fadeInToLeft.transition(3, 0)}
                    >
                        <div className="historicalItem__container-info_right-details">
                            <div className="historicalItem__container-info_right-details_map f-center">
                                <a href={`${data?.item[0]?.map_link}`}>
                                    {
                                        (language?.toLowerCase() === AR) ? "تحقق من الخريطة الخاصة بك"
                                        : "Check your map"
                                    }
                                </a>
                            </div>
                            <div className="historicalItem__container-info_right-details_location f-center">
                                {
                                    (language?.toLowerCase() === AR) ? <h2>الموقع:</h2>
                                    : <h2>Location: </h2>
                                }
                                <p>{data?.item[0]?.location}</p>
                            </div>
                            <div className="historicalItem__container-info_right-details_category f-center">
                                {
                                    (language?.toLowerCase() === AR) ? <h2>الفئة:</h2>
                                    : <h2>Category: </h2>
                                }
                                <p>{data?.item[0]?.category}</p>
                            </div>
                            <div className="historicalItem__container-info_right-details_status f-center">
                                {
                                    (language?.toLowerCase() === AR) ? <h2>الحالة:</h2>
                                    : <h2>Status: </h2>
                                }
                                {
                                    (language?.toLowerCase() === AR) && (
                                        data?.item[0]?.status ? <p>مفتوح للزوار</p>
                                        : <p>غير مفتوح للزوار</p>
                                    )
                                }
                                {
                                    (language?.toLowerCase() !== AR) && (
                                        data?.item[0]?.status ? <p>Open for visitors</p>
                                        : <p>Not open for visitors</p>
                                    )
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HistoricalItem