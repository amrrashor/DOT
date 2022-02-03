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

    h2 {
        z-index:2
    }

    p {
        width:80%;
        margin: 0 auto;
        z-index:2;
    }

    .contnet{
        position:relative;
    }

    .order{
        position:absolute;
        color:${({ theme }) => theme.colors.lightblack};
        font-weight:${({theme})=> theme.fontWeightfw_3};
        opacity:0.3;
        font-size:250px;
        right:0;
        top:-40px;
        z-index:1;
        user-select:none;
    }
`