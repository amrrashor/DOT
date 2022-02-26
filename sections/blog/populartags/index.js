//react
import Link from 'next/dist/client/link';

//styled components
import { TagContainer, Tag } from './populartags.styled'
//data
import Data from './Data'


const PopularTag = () => {
    return (
        <TagContainer>
            {Data.map(d => (
                <Link href={d.link} key={d.id}>
                        <Tag
                            className='single'
                            whileHover={{ backgroundColor: "wheat" }}
                            transition={{duration:0.3}}
                        >
                            {d.title}
                        </Tag>
                </Link>
            ))}
        </TagContainer>
    )
}

export default PopularTag