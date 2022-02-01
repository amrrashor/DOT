import { GalleryBanner } from "./gallerybanner.styled";
import { MainHeading, StyledContainer, Button, Flex } from '../../../components/layout/Layout.styled';


const Banner = () => {
    return (
        <GalleryBanner>
            <StyledContainer>
                <MainHeading>interested in our works? please consider calling us.</MainHeading>
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