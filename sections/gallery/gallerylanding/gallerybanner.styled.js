import styled from "styled-components";

export const GalleryLanding = styled.div`
    position:relative;
    max-height:70vh;
    overflow:hidden;

    .layout{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        width:100%;
        background-color:#000;
        opacity:0.5;
        z-index:5;
    }

    .slider {
    }

    .titleBg{
        background-color: ${({ theme }) => theme.colors.lightblack};
        padding:25px 40px;
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};
        position:absolute;
        right:30%;
        left:30%;
        top:50%;
        z-index:6;
        text-align:center;

        @media screen and (max-width:${({ theme }) => theme.responsive.mobile}){
            top:0;
            left:0;
            bottom:0;
            right:0;
            padding-top:200px;
        }
    }
`
