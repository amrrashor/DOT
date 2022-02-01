//styled components
import { MainHeading, Paragraph ,Flex, Button, StyledContainer, Column, StyledRow, Image } from "../../../components/layout/Layout.styled"
import { BannerContainer, BannerBox } from "./Banner.styled"

//icons
import { BiChevronRight } from "react-icons/bi";

import Link from 'next/link'

const Banner = () => {
    return (
        <BannerContainer>
            <StyledContainer>
            <div className="bannerBg">
                <BannerBox>
                    <Flex Direction="column" className="desc">
                        <MainHeading>want to set up your business today?</MainHeading>
                        <Paragraph>create a high performance solution</Paragraph>
                    </Flex>
                    <Link href="/contact">
                            <Button>find more <BiChevronRight /></Button>
                    </Link>    
                </BannerBox>
            </div>
            </StyledContainer>
        </BannerContainer>
    )
}

export default Banner