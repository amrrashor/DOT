import styled from "styled-components";

export const GalleryImageContainer = styled.div`
    width:100%;

    img{
        border-radius:${({theme}) => theme.brderRadi.borderRadius_2};
    }
`