import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsPencilFill } from 'react-icons/bs';


const Search = <AiOutlineSearch className='up' />;
const Concept = <FaRegLightbulb className="up" />;
const Design = <BsPencilFill className='up' />;

const TabData = [
    {
        id: 1,
        icon: Search,
        image:'/assets/news/news1.jpg',
        title: "research",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste harum soluta repellendus aliquid, rem magnam esse voluptas necessitatibus quod, nobis aperiam omnis unde similique inventore quibusdam repudiandae modi reiciendis!",
    },
    {
        id: 2, 
        icon: Concept,
        image:'/assets/news/news2.jpg',
        title: "concept",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste harum soluta repellendus aliquid, rem magnam esse voluptas necessitatibus quod, nobis aperiam omnis unde similique inventore quibusdam repudiandae modi reiciendis!",
    },
    {
        id: 3,
        icon: Design,
        image:'/assets/news/news3.jpg',
        title: "design",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste harum soluta repellendus aliquid, rem magnam esse voluptas necessitatibus quod, nobis aperiam omnis unde similique inventore quibusdam repudiandae modi reiciendis!",
    },
]

export default TabData