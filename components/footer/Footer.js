import Link from 'next/link';

import { FooterContainer } from "./Footer.styled";
import {
    StyledContainer,
    StyledRow,
    Column,
    Title,
    Paragraph,
    Icon,
    Flex,
    Divider,
} from "../layout/Layout.styled";
import {Logo} from '../navbar/Navbar.stlyed'
import Data from './Data';

const Footer = () => {
    return (
        <FooterContainer>
            <StyledContainer >
                <StyledRow >
                    <Column xs={6} sm={6} md={6} lg={3}>
                        <Link href="/">
                            <Logo> <span>m</span> IM</Logo>
                        </Link>
                        <Paragraph m="15px 10px 0 0">we are a digital agency based in california</Paragraph>
                    </Column>

                    <Column key={Data.FooterLink.id} xs={6} sm={6} md={6} lg={3}>
                        <Title>{Data.FooterLink.title}</Title>
                        <Flex Direction="column" m="10px 0">
                            <Link href={Data.FooterLink.link.one}>
                                { Data.FooterLink.titleLink.one}
                            </Link>

                            <Link href={Data.FooterLink.link.two}>
                                { Data.FooterLink.titleLink.two}
                            </Link>

                            <Link href={Data.FooterLink.link.three}>
                                { Data.FooterLink.titleLink.three}
                            </Link>

                            <Link href={Data.FooterLink.link.four}>
                                { Data.FooterLink.titleLink.four}
                            </Link>
                        </Flex>
                    </Column>

                    <Column key={Data.FooterLegal.id} xs={6} sm={6} md={6} lg={3}>
                        <Title>{ Data.FooterLegal.title}</Title>
                        <Flex Direction="column" m="10px 0">
                            <Link href={Data.FooterLegal.link.one}>
                                { Data.FooterLegal.titleLink.one}
                            </Link>

                            <Link href={Data.FooterLegal.link.two}>
                                { Data.FooterLegal.titleLink.two}
                            </Link>
                            
                            <Link href={Data.FooterLegal.link.three}>
                                { Data.FooterLegal.titleLink.three}
                            </Link>
                            
                            <Link href={Data.FooterLegal.link.four}>
                                {Data.FooterLegal.titleLink.four}
                            </Link>
                        </Flex>
                    </Column>

                    <Column key={Data.FooterContact.id} xs={6} sm={6} md={6} lg={3}>
                        <Title>{Data.FooterContact.title}</Title>
                        <Flex Justify="none">

                            <Link  href={Data.FooterContact.link.one}>
                                <Icon m="10px 10px 0 0" Color={Data.FooterContact.color.one} Size="2rem">{Data.FooterContact.Social.one}</Icon>
                            </Link>

                            <Link href={Data.FooterContact.link.two}>
                                <Icon m="10px 10px 0 0" Color={Data.FooterContact.color.two}  Size="2rem">{Data.FooterContact.Social.two}</Icon>
                            </Link>

                            <Link href={Data.FooterContact.link.three}>
                                <Icon m="10px 10px 0 0" Color={Data.FooterContact.color.three}  Size="2rem">{Data.FooterContact.Social.three}</Icon>
                            </Link>

                            <Link href={Data.FooterContact.link.four}>
                                <Icon Color={Data.FooterContact.color.four} Size="2rem">{Data.FooterContact.Social.four}</Icon>
                            </Link>

                        </Flex>
                    </Column>
                </StyledRow>

                <Divider />

                <Paragraph align="center">&copy; MIM 2022, all rights reserved. </Paragraph>
            </StyledContainer>
        </FooterContainer>
    )
}

export default Footer