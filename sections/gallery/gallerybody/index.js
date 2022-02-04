import Link from 'next/link'

import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';

import Data from './data'
import { Column, StyledContainer, StyledRow, Image, SubHeading, Icon, Divider } from "../../../components/layout/Layout.styled";
import { GalleryBody } from './gallerybody.styled';


const Gallery = () => {
    return (
        <GalleryBody>
            <StyledContainer>
                <StyledRow>
                    {Data.map((d, index) => (
                        <Column key={index} xl={6} lg={6} md={6} sm={12} xs={12}> 
                            <Link href="/singlegallerypage">
                                <motion.div whileHover={{y:-10}} transition={{duration: 0.3, type: "tween"}} className="content">
                                    <motion.div whileHover={{opacity:1, y:0}} transition={{ duration: 0.4, type: "tween" }} className="layout">
                                        <SubHeading>full case study</SubHeading><Icon> <AiOutlineSearch /></Icon>
                                    </motion.div>
                                    <Image src={d.img} />
                                </motion.div>
                            </Link>
                        </Column>
                    ))}
                </StyledRow>
                <Divider />
            </StyledContainer>
        </GalleryBody>
    )
}

export default Gallery