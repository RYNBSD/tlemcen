import React from 'react'
import Head from 'next/head'

interface headInterface {
    title: string,
    children: React.ReactNode,
}

const HeadHTML = ({ title, children }: headInterface):JSX.Element => {

    //Check If the title is not null
    const Title:string = title ? title : '';

    //Check if the children is not null
    const Children:React.ReactNode | React.ReactFragment = children ? children : <></>;

    return (
        <Head>
            <title>{Title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key={Title} />
            {Children}
        </Head>
    );
}

export default HeadHTML