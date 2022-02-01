import { FaqContainer, SingleItem } from "./faq.styled";
import {StyledContainer, StyledRow, Column, Image } from "../../components/layout/Layout.styled";
import { Accordion } from "react-bootstrap";
import Data from './Data';
import { Animated } from "../../components/layout/Animation";

const Faq = () => {
    return (
        <Animated>
            <FaqContainer className="space">
                <StyledContainer>
                    <StyledRow>
                        <Column xs={12} sm={12} md={6} lg={6}>
                                <Image src="assets/FAQ.svg" />
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
                </StyledContainer>
            </FaqContainer>
        </Animated>
    )
}

export default Faq