import Link from 'next/link';

import { Paragraph, StyledContainer, StyledRow, Column, Icon, Button } from "../../../components/layout/Layout.styled"
import { CompaniesContainer } from './Companies.styled';
import Data from './Data'

const Companies = () => {
    return (
        <CompaniesContainer>
            <StyledContainer w="60%" className="text-center">
                
                <Paragraph className="text-center" Size="2rem" p="20px 0 20px 0">trusted by</Paragraph>
                <StyledRow> 
                    {Data.map(d => (
                        <Column key={d.id} lg={3}  xs={6}>
                                <Paragraph align="center">
                                    <Icon Color={d.color}>{d.logo }</Icon>
                                    {d.title}
                                </Paragraph>
                        </Column>
                    ))}
                </StyledRow>
                <Paragraph p="40px 0 30px 0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate quia a dolores, quas officiis modi vitae asperiores nam architecto? Perspiciatis similique assumenda nemo quia consectetur possimus labo</Paragraph>
                <Link href="/contact">
                    <Button>get started</Button>
                </Link>
            </StyledContainer>
        </CompaniesContainer>
    )
}
export default Companies