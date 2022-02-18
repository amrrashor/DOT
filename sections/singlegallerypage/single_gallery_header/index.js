import { HeaderContainer } from './Header.styled';
import { Divider, MainHeading, Paragraph, Small } from '../../../components/layout/Layout.styled';
const Header = () => {
    return (
        <HeaderContainer>
            <Small>simple mockup</Small>
            <MainHeading>full case study</MainHeading>
            <Paragraph>stand out with creative and professional layouts</Paragraph>
            <Divider />
        </HeaderContainer>
    )
}

export default Header