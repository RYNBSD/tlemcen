import { StaticImageData } from 'next/image';

import { citadelleEtPalaisElMechouar, greatMosque, mosqueSidiBoumediene } from '../../constants/images';

interface discoverDataInterface {
    img: StaticImageData,
    title: string,
    desc: string,
}

export const discoverData:discoverDataInterface[] = [
    {
        img: greatMosque,
        title: "Great Mosque",
        desc: "The Great Mosque of Tlemcen is a major historical mosque in Tlemcen, Algeria. It was founded and built in 1082 but modified and embellished several times thereafter. It is considered one of the most important examples of architecture under the Almoravid dynasty.",
    },
    {
        img: mosqueSidiBoumediene,
        title: "Sidi Boumediene Mosque",
        desc: "Sidi Boumediene Mosque is a mosque located in the El Eubbad district of Tlemcen, built in 1337 (715 of the Hegira) by the Marinid sultan Abu l'Hassan Ali (known as the black sultan) as an annex to the mausole1.",
    },
    {
        img: citadelleEtPalaisElMechouar,
        title: "Citadel and El Mechouar Palace",
        desc: "El Mechouar Palace is a Zianid royal palatial complex, located in Tlemcen, Algeria. Built in the Middle Ages by the Zianid sultans in 12483.",
    },
]