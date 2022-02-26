//react
import Link from "next/dist/client/link";

//styled components
import { PriceCardContainer, Currency } from "./Pricing.styled";
import { Paragraph, Button, Title, MainHeading } from "../../../components/layout/Layout.styled";

const PriceCard = ({option, productDetails}) => {
    const {
        planType,
        monthlyPrice,
        annualPrice,
        desc,
        firstLi,
        secondLi,
        thirdLi,
        fourthLi
    } = productDetails

    return (
        <PriceCardContainer whileHover={{y:-10, scale:1.03}} planType={planType}>

            <Title>{planType}</Title>

            <MainHeading plan={planType}>
                <Currency>$</Currency>
                {option === "monthly" ? monthlyPrice : annualPrice}
            </MainHeading>

            <Paragraph>{desc}</Paragraph>
            <Paragraph>{firstLi}</Paragraph>
            <Paragraph> {secondLi}</Paragraph>
            <Paragraph>{thirdLi}</Paragraph>
            <Paragraph> {fourthLi}</Paragraph>
            
            <Link href="/contact">
                <Button>choose plan</Button>
            </Link>

        </PriceCardContainer>
    )
}

export default PriceCard