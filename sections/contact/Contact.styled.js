import styled from "styled-components";

export const ContactContainer = styled.div`
    width:100%;

    iframe {
        width:100%;
        border-radius:${({ theme }) => theme.brderRadi.borderRadius_2};
        @media screen and (max-width: ${({ theme }) => theme.responsive.mobile}) {
            margin-top: 20px;
        }
    }

    a{
        width:70%;
        text-align:center;
        margin:10px 0;
    }

    input,
    textarea {
        border-radius:${({ theme }) => theme.brderRadi.borderRadius};
        background-color:${({ theme }) => theme.colors.dark};
        font-size:${({ theme }) => theme.fontSize.fz_1};
        color:${({ theme }) => theme.colors.white};
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
        border:2px solid #81e6d9;
        outline:none;
        padding:10px;
        width:70%; 
        margin:10px 0;
        
        ::placeholder {
            text-transform:capitalize;
        }
    }
`
export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    height:100%;
    width:100%;
    background-color:${({ theme }) => theme.colors.gunmetal};
    border-radius:${({ theme }) => theme.brderRadi.borderRadius_2};
    padding:30px 0;
`
