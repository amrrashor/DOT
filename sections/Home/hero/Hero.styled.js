import styled from "styled-components";

export const HeroContainer = styled.div`
    width:100%;
    .radius {
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
    }

    .landing {
        position:relative;
    }

    .landing::before {
        content:'';
        position:absolute;
        width:80%;
        height:100%;
        left:25%;
        top:20px;
        background-color:#000;
        z-index:1;
        background: ${({ theme }) => theme.colors.button};
        opacity:0.5;
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    }

    .content {
        position:relative;
    }

    img {
        z-index:2;
        position:relative;
        width:100%;
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
    }  
`


