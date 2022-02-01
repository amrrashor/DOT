import styled from "styled-components";

export const SinglePageContainer = styled.div`
    width:100%;
    
    @media screen and (max-width:${({ theme }) => theme.responsive.LG}) {
        .direction {
            flex-direction:column-reverse;
        }
    }
`

export const BlogBody = styled.article`
    width:100%;
    margin-top:50px;

    p,h3 {
        margin:25px 0;
    }
`

export const Shadow = styled.p`
    background-color: ${({ theme }) => theme.colors.rawblack};
    padding:30px;
    font-size:${({theme}) => theme.fontSize.fz_1};
    position:relative;
    box-shadow: ${({theme}) => theme.BX_shadow.BX_shadow_1};


    &:before {
        content:'';
        position:absolute;
        background-color: ${({ theme }) => theme.colors.button};
        width:4px;
        height:100%;
        left:0;
        top:0;
    }
    
`