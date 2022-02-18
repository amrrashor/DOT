import Link from 'next/link'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

import { SinglePageContainer, BlogBody, Shadow } from "./SingleBlogPage.styled"
import { StyledContainer, StyledRow, Column, Image, SubHeading, Paragraph, Sticky, Flex, Small, TexTBtn } from '../../components/layout/Layout.styled'
import { Animated } from '../../components/layout/Animation';
import Search from "../blog/search"
import SideCategories from "../blog/sideCategories"
import PopularTag from "../blog/populartags"
import SocialBlock from '../blog/socialblock';
import BlogHeader from '../blog/blogHeader';
import BlogTape from '../blog/blogtape'
import BlogBanner from '../blog/blogbanner'
import Data from './Data'


const SinglePage = () => {
    return (
        <Animated>
            <SinglePageContainer className="space">
                <BlogHeader />
                <StyledContainer>
                    <StyledRow className="direction">
                        <Column xl={3} lg={3} md={12} sm={12} xs={12}>
                            <Sticky>
                                <Search />
                                <SideCategories />
                                <PopularTag />
                                <SocialBlock />
                            </Sticky>
                        </Column>

                        <Column xl={9} lg={9} md={12} sm={12} xs={12}>
                            {Data.map(d => (
                                <BlogBody key={d.id}>
                                    <Image src={d.img} />
                                    <SubHeading>{d.title}</SubHeading>
                                    <Flex Justify="start">
                                        <Small>{d.author}</Small>
                                        <Small>{d.date}</Small>
                                    </Flex>
                                    <Paragraph>{d.desc}</Paragraph>
                                    <Shadow>{d.desc}</Shadow>
                                    <Paragraph>{d.desc}</Paragraph>
                                    <Paragraph>{d.desc}</Paragraph>
                                    <Shadow>{d.desc}</Shadow>
                                    <Paragraph>{d.desc}</Paragraph>
                                    <Flex>
                                        <Link href="/singleblogpage">
                                            <TexTBtn>
                                                <BsChevronDoubleLeft className="up" />previous article
                                            </TexTBtn>
                                        </Link>
                                        <Link href="/singleblogpage">
                                            <TexTBtn>
                                                next article <BsChevronDoubleRight className="up" />
                                            </TexTBtn>
                                        </Link>
                                    </Flex>
                                </BlogBody>
                            ))}
                        </Column>
                    </StyledRow>
                </StyledContainer>
                <BlogTape />
                <BlogBanner />
            </SinglePageContainer>
        </Animated>
    )
}
export default SinglePage