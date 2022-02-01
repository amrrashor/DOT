import {BannerContainer,Input, Submit} from './BlogBanner.styled'
import { StyledContainer,MainHeading, Title, Flex } from '../../../components/layout/Layout.styled'


const BlogBanner = () => {
    return (
        <BannerContainer>
            <StyledContainer>
                <Flex Direction="column" Justify="center" align="center">
                    <MainHeading>Want to stay up to date with the latest news?</MainHeading>
                    <Title>We would love to hear from you! Please fill in your details and we will stay in touch. It's that simple!</Title>
                    <Flex className='content' Justify="center" >
                        <Input type="email" placeholder='Your E-mail' />
                        <Submit type='submit' />
                    </Flex>
                </Flex>
            </StyledContainer>
        </BannerContainer>
    )
}
export default BlogBanner