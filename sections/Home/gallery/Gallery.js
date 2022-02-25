import Link from 'next/link'

import { CgChevronDoubleRight } from 'react-icons/cg'

import { GalleryContainer } from "./Gallery.styled";
import SectionHeading from '../../../components/SectionHeading/index';
import { StyledContainer, MainHeading, SubHeading, Paragraph, TexTBtn, Button, StyledRow, Column, Image, Flex, Small  } from "../../../components/layout/Layout.styled"
import Data from './Data'

const Gallery = () => {
    return (
        <GalleryContainer className='extra_space'>
            <StyledContainer>
                <SectionHeading title="some of our creative works" desc="We Create Digital Products That Make People’s Lives Easier." />
                <StyledRow>
                    {Data.map(d => (
                        <Column lg={6} xs={12} md={6} key={d.id}>
                            <div className="box">
                                <div className="imgContainer">
                                    <Image src={ d.image}/>
                                </div>
                                <div className="body">
                                    <Flex>
                                        <SubHeading Size="2rem">{d.title}</SubHeading>
                                        <Small className="badge">{ d.subtitle }</Small>
                                    </Flex>
                                    <Link href="/works"><TexTBtn>full case study <CgChevronDoubleRight className="up" /></TexTBtn></Link>
                                </div>
                            </div>
                        </Column>
                    ))}
                </StyledRow>
                <Link href="/gallery">
                    <Flex Justify="center">
                        <Button Radius="20px" m="40px 0">see more works</Button>
                    </Flex>
                </Link>
            </StyledContainer>
        </GalleryContainer>
    )
}

export default Gallery

