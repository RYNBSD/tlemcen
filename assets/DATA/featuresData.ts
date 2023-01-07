import { IconType } from 'react-icons';
import { BiCheckDouble } from '@react-icons/all-files/bi/BiCheckDouble';
import { FaMapMarkedAlt } from '@react-icons/all-files/fa/FaMapMarkedAlt';
import { RiUserLocationLine } from '@react-icons/all-files/ri/RiUserLocationLine';
import { MdCardTravel } from '@react-icons/all-files/md/MdCardTravel';

interface discoverDataInterface {
    icon: IconType,
    title: string,
    description: string,
}

export const featuresDataEN:discoverDataInterface[] = [
    {
        icon: MdCardTravel,
        title: 'Mobility',
        description: 'Light-weight app that\'s ready to pull up whenever you are, wherever you are',
    },
    {
        icon: BiCheckDouble,
        title: 'Simplicity',
        description: 'Simple, No ADs No visual clutter, just the right info you need, when you need it',
    },
    {
        icon: FaMapMarkedAlt,
        title: 'Explore',
        description: 'Explore our catalogue of touristic sites, and amazing location',
    },
    {
        icon: RiUserLocationLine,
        title: 'Find',
        description: 'Find things to do or to see while you\'re on the move',
    },
]

export const featuresDataAR:discoverDataInterface[] = [
    {
        icon: MdCardTravel,
        title: 'تنقل',
        description: 'تطبيق خفيف الوزن جاهز للعرض أينما كنت',
    },
    {
        icon: BiCheckDouble,
        title: 'البساطة',
        description: 'بسيطة ، بدون إعلانات ، لا توجد فوضى بصرية ، فقط المعلومات الصحيحة التي تحتاجها ، عندما تحتاجها',
    },
    {
        icon: FaMapMarkedAlt,
        title: 'إكتشف',
        description: 'استكشف كتالوج المواقع السياحية والمواقع المذهلة لدينا',
    },
    {
        icon: RiUserLocationLine,
        title: 'ابحث عن طريقك',
        description: 'اعثر على الأشياء التي يمكنك القيام بها أو رؤيتها أثناء التنقل',
    },
]