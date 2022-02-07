import styled from "styled-components";

export const GalleryBody = styled.div`
    width:100%;

    .content {
        position:relative;
        width:100%;
        margin:15px 0;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow: ${({ theme }) => theme.BX_shadow.BX_shadow_1};

        &:hover .desc {
            opacity:1;
            transform:translateY(40px);
        }
    }

    .desc {
        position:absolute;
        background-color:${({ theme }) => theme.colors.lightblack};
        padding:20px;
        width:50%;
        text-align:center;
        opacity:0;
        transform:translateY(50px);
        transition:${({theme}) => theme.transition.trans};
    }

    img {
        width:100%;
    }
`