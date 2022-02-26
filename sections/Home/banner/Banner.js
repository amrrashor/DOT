//react
import Link from 'next/link'

//react icons
import { BiChevronRight } from "react-icons/bi";

//styled components
import { Flex, Button, StyledContainer } from "../../../components/layout/Layout.styled"
import { BannerContainer, BannerBox } from "./Banner.styled"
//components
import SectionHeading from '../../../components/SectionHeading/index'

const Banner = () => {
    return (
        <BannerContainer className='space'>
            <StyledContainer>
            <div className="bannerBg">
                <BannerBox>
                    <Flex Direction="column" className="desc">
                        <SectionHeading title="want to set up your business today?" desc="create a high performance solution" />    
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