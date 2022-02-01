import styled from "styled-components";

export const GalleryContainer = styled.div`
    width:100%;

    .imgContainer {
        overflow:hidden;
    }

    img {
        transition:0.4s;
        width:100%;
    }
    .body {
        padding:30px;

        @media screen and (max-width:${({ theme }) => theme.responsive.mobile}) {
            padding:15px 10px;
        }
    }

    .badge {
        background-color:${({ theme }) => theme.colors.button};
        color: ${({ theme }) => theme.colors.dark};
        padding:5px;
        opacity:0.7;

        @media screen and (max-width:${({ theme }) => theme.responsive.mobile}) {
            padding:4px 2px;
            margin:7px;
        }
    }

    .box {
        padding:0;
        overflow:hidden;
        &:hover img {
            transform:scale(1.15);
        }
    }
`

