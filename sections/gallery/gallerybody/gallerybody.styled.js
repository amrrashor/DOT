import styled from "styled-components";

export const GalleryBody = styled.div`
    width:100%;
    


    .content {
        margin:15px 0;
        overflow:hidden;
        cursor:pointer;
        position:relative;
    }

    .layout {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:${({theme}) => theme.colors.lightblack};
        opacity:0;
        transfrom:translateY(-100px);
        display:flex;
        justify-content:center;
        align-items:center;
    }
`