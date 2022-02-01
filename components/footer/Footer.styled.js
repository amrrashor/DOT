import styled from "styled-components";


export const FooterContainer = styled.div`
    width:100%;
    padding: 30px 0 0 0;
    background-color:${({ theme }) => theme.colors.gunmetal};
    
    span {
        cursor:pointer;
    }

    a{
        font-size: ${({ theme }) => theme.fontSize.fz_1};
        color: ${({ theme }) => theme.colors.paragraph};
        line-height:2;
        text-transform: capitalize;
        margin:5px 0px 0 0;
    }


`