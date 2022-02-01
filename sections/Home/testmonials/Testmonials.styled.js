import styled from "styled-components";


export const TestContainer = styled.div`
    width:100%;

    .singleswiper {
        background-color: ${({ theme }) => theme.colors.gunmetal};
        border-radius:${({theme}) =>theme.brderRadi.borderRadius_2};
        padding:15px;
        cursor:grab;
    }

    .golden {
        color:gold;
        margin-bottom:3px;
    }
`
