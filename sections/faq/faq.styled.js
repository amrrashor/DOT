import styled from "styled-components";
import { Accordion } from "react-bootstrap";


export const FaqContainer = styled.div`
    width:100%;

    .us {
        font-size:inherit;
        font-weight:inherit;
        text-transform:inherit;
        color:${({ theme }) => theme.colors.button};
    }
`

export const SingleItem = styled(Accordion.Item)`
    background-color:${({ theme }) => theme.colors.gunmetal} !important;
    box-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};
    border-radius: ${({theme}) => theme.brderRadi.borderRadius_2} !important ;
    padding:30px 10px;
    margin:20px 0;

    .accordion-button,
    .accordion-body {
        color:${({theme}) => theme.colors.white};
        background-color:${({ theme }) => theme.colors.dark};
        font-size:${({ theme }) => theme.fontSize.fz_1};
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius} !important ;
        box-shadow:${({ theme }) => theme.BX_shadow.BX_shadow_1};
    }
    .accordion-button {
        font-weight:${({ theme }) => theme.fontWeight.fw_2};
        text-transform:Capitalize;
        margin:6px 0;
    }
`
