//styled components
import { GalleryBanner } from "./gallerybanner.styled";
import { StyledContainer, Button, Flex, MainHeading } from '../../../components/layout/Layout.styled';

const Banner = () => {
    return (
        <GalleryBanner>
            <StyledContainer>
                <MainHeading m="0 0 40px 0">interested in our works? please consider calling us.</MainHeading>
                <form>
                    <Flex Direction="column" className="first">
                        <input type="text" placeholder="your name" />
                        <input type="text" placeholder="your email" />
                    </Flex>
                    <Flex Direction="column" className="second">
                        <textarea placeholder="your subject" />
                        <Button>send</Button>
                    </Flex>
                </form>
            </StyledContainer>
        </GalleryBanner>
    )
}
export default Banner