import Link from 'next/link'

import { SingleCardContainer, SingleCard } from "./singleNewsCard.styled";
import { Title, Paragraph, TexTBtn, StyledRow, Column, Image, Small} from '../../../components/layout/Layout.styled'
import Data from './Data';

export const Single = () => {
    return (
        <SingleCardContainer>
                <StyledRow>
                    {Data.map(d => (
                        <Column xl={5} lg={5} md={6} sm={12} xs={12}>
                            <SingleCard>
                                <Image src={d.img} />
                                <div className="content">
                                    <Small>{d.type}</Small>
                                    <Small>{d.duration}</Small>
                                    <Title m="15px 0 25px 0">{d.title}</Title>
                                    <Paragraph m=" 0 0 20px 0">{d.desc}</Paragraph>
                                    <Link href="/singleblogpage">
                                        <TexTBtn>read more</TexTBtn>
                                    </Link>
                                </div>
                            </SingleCard>
                        </Column>
                    ))}
                </StyledRow>
        </SingleCardContainer>
    )
}

export default Single