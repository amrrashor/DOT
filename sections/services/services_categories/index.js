//styled components
import { CategoryContainer } from "./categories.styled";
import { MainHeading, Paragraph, StyledContainer, StyledRow, Column, Flex } from '../../../components/layout/Layout.styled'
//data
import Data from './data'

const Category = () => {
    return (
        <CategoryContainer>
            <StyledContainer>
                <StyledRow>
                    {Data.map((d) => (
                        <Column key={d.order} xs={12}>
                            <StyledRow className="margin" Direction={d.direction === "reverse" ? "row-reverse" : "row"} align="center" justify="space-between">
                                <Column lg={6} md={12} sm={12} xs={12}>
                                    <MainHeading className="icon" Size="60px">{d.icon}</MainHeading>
                                </Column>
                                <Column lg={6} md={12} sm={12} xs={12}>
                                    <Flex className="contnet" Direction="column">
                                        <MainHeading className="order">{ d.order}</MainHeading>
                                        <MainHeading>{d.title}</MainHeading>
                                        <Paragraph>{ d.paragraph}</Paragraph>
                                    </Flex>
                                </Column>
                            </StyledRow>
                        </Column>
                    ))}
                </StyledRow>
            </StyledContainer>
        </CategoryContainer>
    )
}

export default Category