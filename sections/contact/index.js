//animation component
import { ThirdAnimated } from "../../components/layout/Animation"
//styled components
import { ContactContainer, Form } from "./Contact.styled";
import { Column, StyledContainer, StyledRow, Button, MainHeading } from "../../components/layout/Layout.styled";

const MainContact = () => {
    return (
        <ThirdAnimated>
            <ContactContainer className="space">
                <StyledContainer>
                    <MainHeading>let's talk</MainHeading>
                    <StyledRow>
                        <Column xs={12} sm={12} md={6} lg={4}>
                            <Form>
                                <input type="text" placeholder="your name" />
                                <input type="text" placeholder="your email" />
                                <textarea placeholder="your subject" />
                                <Button>send</Button>
                            </Form>
                        </Column>
                        <Column xs={12} sm={12} md={6} lg={8}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340138938!2d-0.24168153443090962!3d51.528558241258565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1643046717014!5m2!1sen!2seg" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                        </Column>
                    </StyledRow>
                </StyledContainer>
            </ContactContainer>
        </ThirdAnimated>
    )
}

export default MainContact