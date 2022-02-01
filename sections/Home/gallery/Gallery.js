import { GalleryContainer } from "./Gallery.styled";
import { StyledContainer, MainHeading, SubHeading, Paragraph, TexTBtn, Button, StyledRow, Column, Image, Flex, Small  } from "../../../components/layout/Layout.styled"
import Data from './Data'
import Link from 'next/link'
import { CgChevronDoubleRight } from 'react-icons/cg'
const Gallery = () => {
    return (
        <GalleryContainer>
            <StyledContainer>
                <MainHeading>some of our creative works</MainHeading>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos minima?</Paragraph>
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

