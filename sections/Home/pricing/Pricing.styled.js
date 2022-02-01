import styled from "styled-components";
import { motion } from "framer-motion";

//main pricing page styled components
export const PricingContainer = styled.div`
    width:100%;
    p{
        margin:20px 0;
    }
`

//pricing card styled components
export const PriceCardContainer = styled(motion.div)`
    display:flex;
    flex-direction:column;
    background: ${(props) => props.planType === "professional" ? "#212529" : ""};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
    text-align:center;
    padding:3rem;
    margin:1rem 0;
`

export const Currency = styled.span`
    font-size:${({ theme }) => theme.fontSize.fz_3};
    line-height:3;
`

//toggle button styled components
export const ToggleContainer = styled.div`
    display:flex;
    margin:25px 0;
`

export const ToggleBack = styled.div`
    position:relative;
    width:5.6rem;
    height:3.2rem;
    background: ${({theme})=> theme.colors.lightblack};
    border-radius:${({ theme }) => theme.brderRadi.borderRadius_2};
    margin:0 2.4rem;
    cursor:pointer;
`

export const ToggleFront = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    left: ${(props) => (props.option === "monthly" ? "24px" : "0")};
    width:2.4rem;
    height:2.4rem;
    background:${({ theme }) => theme.colors.white};
    color:${({ theme }) => theme.colors.dark};
    font-size:${({theme}) =>theme.fontSize.fz_1};
    border-radius:50%;
    margin:0.4rem;
    transition:${({theme}) => theme.transition.trans};
`