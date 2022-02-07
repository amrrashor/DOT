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
                    {Data.map((d) => (
                        <Column key={d.id} xl={6} lg={6} md={6} sm={12} xs={12}> 
                            <Link href="/singlegallerypage" >
                                <div className="content">
                                    <SubHeading className='desc'>full case study</SubHeading>
                                    <Image src={d.img} />
                                </div>
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