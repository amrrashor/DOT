import { ServiceHero } from "./servicehero.styled"
import { MainHeading, Paragraph, Image, StyledRow, StyledContainer, Column, Flex } from '../../../components/layout/Layout.styled'

const Hero = () => {
    return (
        <ServiceHero>
            <StyledContainer p="80px 0">
                    <StyledRow>
                        <Column xs={12} sm={12} md={12} lg={6} xl={6} align="left">
                            <Flex Direction="column">
                                <MainHeading>we provide you with the best services and with a reasonable prices</MainHeading>
                                <Paragraph m="10px 0 40px 0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nulla odit a aperiam repellat facere magnam excepturi ex in alias maxime dignissimos, voluptatibus. </Paragraph>
                            </Flex>
                        </Column>
                        <Column xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Image src="/assets/services/servicehero.jpg" />
                        </Column>
                    </StyledRow>
            </StyledContainer>
        </ServiceHero>
    )
}

export default Hero