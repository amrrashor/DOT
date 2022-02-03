import { MdDesignServices } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { FaBullhorn } from 'react-icons/fa'

const Design = <MdDesignServices />
const Development = <CgWebsite />
const Marketing = <FaBullhorn />


const CategotryData = [
    {
        icon: Design,
        title: "Design",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla odit a aperiam repellat facere magnam excepturi ex in alias maxime dignissimos, voluptatibus. ",
        direction: "normal",
        order: "1",
    },
    {
        icon: Development,
        title: "Development",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla odit a aperiam repellat facere magnam excepturi ex in alias maxime dignissimos, voluptatibus. ",
        direction: "reverse",
        order: "2",
    },
    {
        icon: Marketing,
        title: "Marketing",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla odit a aperiam repellat facere magnam excepturi ex in alias maxime dignissimos, voluptatibus. ",
        direction: "normal",
        order: "3",
    },
]

export default CategotryData