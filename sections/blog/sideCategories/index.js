//react
import Link from 'next/link'

//react icons
import { BiChevronRight } from "react-icons/bi"

//styled components
import { CategoriesContainer, Single } from "./sidecategories.styled";
//data
import Data from './Data';

const SideCategories = () => {
    return (
        <CategoriesContainer>
                {Data.map(d => (
                    <Link href={d.link}>
                            <Single
                                key={d.id}
                                className="single"
                                whileHover={{ x: 10 }}
                                transition={{duration: 0.3, type:"tween"}}
                            >
                                <BiChevronRight /> {d.title}
                            </Single>
                    </Link>
                ))}
        </CategoriesContainer>
    )
}

export default SideCategories