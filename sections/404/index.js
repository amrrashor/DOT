//react
import Link from 'next/link';

//styled components & animation components
import { ErrorContainer } from "./404.styled"
import { Flex, MainHeading, Paragraph, StyledContainer, Button } from "../../components/layout/Layout.styled";
import { Animated } from "../../components/layout/Animation";


const error = () => {
    return (
    <Animated>
        <ErrorContainer>
                <StyledContainer>
                        <Flex className="box">
                            <MainHeading  Size="10em">404!</MainHeading>
                            <Paragraph>oops! it seems that this page doesn't exist</Paragraph>
                            <Link href="/">
                                <Button>go back to home</Button>
                            </Link>
                        </Flex>
            </StyledContainer>
        </ErrorContainer>
    </Animated>
    )
}

export default error