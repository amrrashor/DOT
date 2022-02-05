import { useState } from "react";

//styled components
import { PricingContainer } from "./Pricing.styled";
import {
    StyledContainer,
    StyledRow,
    Column,
    Paragraph,
    MainHeading,
    Divider
} from '../../../components/layout/Layout.styled'
//components
import PriceToggler from "./PriceToggle";
import PriceCard from "./PriceCard";
//data
import Data from './Data';

const Pricing = () => {

    const [option, setOption] = useState("monthly");

    const handleToggle = () => {
        if (option === "monthly") {
            setOption("annually");
        } else {
            setOption("monthly");
        }
    }

    return (
        <PricingContainer>
            <StyledContainer>
                <MainHeading>simple, transparent pricing.</MainHeading>
                <Paragraph>no contracts and surpricing fees.</Paragraph>  
                <PriceToggler option={option} handleToggle={handleToggle} />
                <Divider />
                <StyledRow>
                    {Data.Pricing.map((d) => (
                        <Column lg={4} md={6} sm={6} xs={12} key={d.id}>
                            <PriceCard
                                key={d.planType}
                                option={option}
                                productDetails={d}
                            />
                        </Column>
                    ))}
                </StyledRow>
            </StyledContainer>
        </PricingContainer>
    )
}

export default Pricing