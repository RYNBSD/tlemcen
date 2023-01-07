import { StaticImageData } from 'next/image';

import { citadelleEtPalaisElMechouar, greatMosque, mosqueSidiBoumediene } from '../../constants/images';

interface discoverDataInterface {
    img: StaticImageData,
    title: string,
    desc: string,
}

export const discoverDataEN:discoverDataInterface[] = [
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

export const discoverDataAR:discoverDataInterface[] = [
    {
        img: greatMosque,
        title: "المسجد الكبير",
        desc: "المسجد الكبير في تلمسان هو مسجد تاريخي رئيسي في تلمسان، الجزائر. تم تأسيسها وبنائها في عام 1082 ولكن تم تعديلها وتزيينها عدة مرات بعد ذلك. وتعتبر واحدة من أهم الأمثلة على العمارة في ظل سلالة المرابطين.",
    },
    {
        img: mosqueSidiBoumediene,
        title: "مسجد سيدي بومدين",
        desc: "مسجد سيدي بومدين (بالإنجليزية: Sidi Boumediene Mosque) هو مسجد يقع في حي العباد في تلمسان، تم بناؤه عام 1337 (715 من الهجيرة) من قبل السلطان المريني أبو الحسن علي (المعروف باسم السلطان الأسود) كملحق للضريح رقم 1.",
    },
    {
        img: citadelleEtPalaisElMechouar,
        title: "قلعة المشور",
        desc: "قصر المشوار هو مجمع فخم ملكي زياني، يقع في تلمسان، الجزائر. تم بناؤه في العصور الوسطى من قبل السلاطين الزيانيين في عام 12483.",
    },
]