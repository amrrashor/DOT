import Link from 'next/link';

import { BiChevronRight } from 'react-icons/bi';

import SectionHeading from '../../../components/SectionHeading';
import { StyledContainer, StyledRow, Column, Paragraph, Title, Image, Flex, TexTBtn, Button } from "../../../components/layout/Layout.styled";
import { NewsContainer } from "./News.styled";
import Data from './Data';

const News = () => {
    return (
        <NewsContainer>
            <StyledContainer>
                <SectionHeading title="our latest news" desc="m dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur. Numquam eos accusantium aliquam earum quam esse a quos min" />
                <StyledRow m="40px 0 0 0">
                    {Data.map(d => (
                        <Column align="left" key={d.id} xs={12} sm={12} md={6} lg={4}>
                            <div className="box">
                                <div className="imgBox">
                                    <Image src={d.src} />
                                </div>
                                <div className="content">
                                    <Title>{d.title}</Title>
                                    <Flex m="20px 0 10px 0">
                                        <Link href="/news">
                                            <TexTBtn> read more <BiChevronRight className="up" /></TexTBtn>
                                        </Link>
                                        <Paragraph>{ d.date }</Paragraph>
                                    </Flex>
                                </div>
                            </div>
                        </Column>
                    ))}
                </StyledRow>
            </StyledContainer>
        </NewsContainer>
    )
}

export default News