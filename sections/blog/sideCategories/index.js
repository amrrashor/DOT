import { CategoriesContainer, Single } from "./sidecategories.styled";
import { BiChevronRight } from "react-icons/bi"

import Data from './Data';
import Link from 'next/link'

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