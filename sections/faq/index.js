import Link from "next/dist/client/link";

import { Accordion } from "react-bootstrap";

import { FaqContainer, SingleItem } from "./faq.styled";
import {StyledContainer, StyledRow, Column, Image, MainHeading, Divider, Title, TexTBtn } from "../../components/layout/Layout.styled";
import Data from './Data';
import { Animated } from "../../components/layout/Animation";

const Faq = () => {
    return (
        <Animated>
            <FaqContainer className="space">
                <StyledContainer>
                    <MainHeading m="40px 0">before asking anything, checkout our FAQS.</MainHeading>
                    <Divider />
                    <StyledRow>
                        <Column xs={12} sm={12} md={6} lg={6}>
                                <Image src="assets/faq/FAQ.svg" />
                        </Column>
                        <Column xs={12} sm={12} md={5} lg={6}>
                            <Accordion defaultActiveKey="0">
                                {Data.map(f => (
                                    <SingleItem key={f.id} eventKey={f.eventKey}>
                                        <Accordion.Header>{ f.title }</Accordion.Header>
                                        <Accordion.Body>
                                            {f.desc}
                                        </Accordion.Body>
                                    </SingleItem>
                                ))}
                            </Accordion>
                        </Column>
                    </StyledRow>
                    <Divider />
                    <MainHeading m="40px 0">still have a question?</MainHeading>
                    <Title>feel free to call <Link href="/contact"><TexTBtn className="us">us.</TexTBtn></Link></Title>
                </StyledContainer>
            </FaqContainer>
        </Animated>
    )
}

export default Faq