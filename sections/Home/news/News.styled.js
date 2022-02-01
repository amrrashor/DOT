import styled from "styled-components";

export const NewsContainer = styled.div`
    width:100%;

    .box {
        padding: 0;
        overflow:hidden;
        &:hover img {
            transform:scale(1.05)
        }
    }

    .imgBox {
        overflow:hidden;
    }

    img {
        transition: ${({theme}) => theme.transition.trans};
    }

    .content {
        padding:15px;
        margin-top:15px;
    }
    
`