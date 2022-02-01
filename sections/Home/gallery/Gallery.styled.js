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
    }

    .badge {
        background-color:${({ theme }) => theme.colors.button};
        color: ${({ theme }) => theme.colors.dark};
        padding:5px;
        opacity:0.7;
    }

    .box {
        padding:0;
        overflow:hidden;
        &:hover img {
            transform:scale(1.15);
        }
    }
`

