//styled components
import { BLogContainer } from "./Blog.styled";
import { StyledRow, Column, StyledContainer, Sticky } from "../../components/layout/Layout.styled";

//animation component
import { Animated } from '../../components/layout/Animation'

//components
import BlogHeader from "./blogHeader";
import Tape from "./blogtape";
import Search from "./search";
import BlogBanner from "./blogbanner";
import Single  from "./single_news_card";
import SideCategories from "./sideCategories";
import PopularTag from "./populartags";
import SocialBlock from './socialblock';

const Blog = () => {
    return (
        <Animated>
            <BLogContainer className="space">
                <BlogHeader />
                <StyledContainer>
                    <StyledRow>
                        <Column xl={3} lg={3} md={12} sm={12} xs={12}>
                            <Sticky>
                                <Search />
                                <SideCategories />
                                <PopularTag />
                                <SocialBlock />
                            </Sticky>
                        </Column>

                        <Column xl={9} lg={9} md={12} sm={12} xs={12}>
                            <Single />
                        </Column>
                    </StyledRow>
                </StyledContainer>
                <Tape />
                <BlogBanner />
            </BLogContainer>
        </Animated>
    )
}

export default Blog