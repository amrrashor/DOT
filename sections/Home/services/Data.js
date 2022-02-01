import { VscMultipleWindows } from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';
import { FaBullhorn } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';

const Design = <VscMultipleWindows />;
const Development = <BiCodeCurly />;
const Marketing = <FaBullhorn />;
const Content = <TiPencil />

const ServiceData = [
    {
        id: 1,
        order:"01",
        icon: Design,
        title: "design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos minima?",
    },
    {
        id: 2,
        order:"02",
        icon: Development,
        title: "development",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos minima?",
    },
    {
        id: 3,
        order:"03",
        icon: Marketing,
        title: "marketing",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos minima?",
    },
]

export default ServiceData