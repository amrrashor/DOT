//styled components
import { ToggleContainer, ToggleBack, ToggleFront } from "./Pricing.styled";
import { Title } from "../../../components/layout/Layout.styled";

const PriceToggler = ({ option, handleToggle }) => {
    return (
        <ToggleContainer onClick={handleToggle}>
            <Title>annualy</Title>

            <ToggleBack>
                <ToggleFront option={option} />
            </ToggleBack>

            <Title>monthly</Title>
        </ToggleContainer>
    )
}

export default PriceToggler