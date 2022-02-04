import Link from 'next/link'

import { CgChevronDoubleRight } from 'react-icons/cg'
import { motion } from 'framer-motion';

import { ServiceContainer } from './Services.styled';
import { MainHeading, Paragraph, StyledContainer, StyledRow, Column, Icon, Flex, TexTBtn, Title, SubHeading } from '../../../components/layout/Layout.styled';
import Data from './Data';

const Services = () => {
    return (
        <ServiceContainer>
            <StyledContainer>
                <MainHeading m="40px 0">we provide you the best services.</MainHeading>
                <StyledRow>
                    {Data.map(d => (
                        <Column key={ d.id } lg={4} md={6} xs={12}>
                            <motion.div whileHover={{y:-10}} className="box order_position">
                                <Flex m="10px 0">
                                    <Icon className='bg text-center' Size="2.5rem">{ d.icon }</Icon>
                                    <Paragraph className="order" Size="1.5rem">{ d.order }</Paragraph>
                                </Flex>
                                <SubHeading m="5px 0 5px">{ d.title }</SubHeading>
                                <Paragraph LH="3">{d.desc}</Paragraph>
                                <Link href="/Services">
                                    <TexTBtn>learn more <CgChevronDoubleRight className='up' /></TexTBtn>
                                </Link>
                            </motion.div>
                        </Column>
                    ))}
                </StyledRow>
            </StyledContainer>
        </ServiceContainer>
    )
}

export default Services