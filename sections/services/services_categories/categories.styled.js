import styled from "styled-components";

export const CategoryContainer = styled.div`
    width:100%;

    .icon {
        background-color:${({theme}) => theme.colors.lightblack};
        border-radius:50%;
        width:120px;
        height:120px;
        padding:8px;
        font-size:80px;
    }

    .margin {
        margin:30px 0
    }

    p {
        width:80%;
        margin: 0 auto;
    }
`