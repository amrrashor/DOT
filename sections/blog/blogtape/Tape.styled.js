import styled from "styled-components";

export const TapeContainer = styled.div`
    width:100%;
`

export const TapeElement = styled.div`
    background-color: ${({ theme }) => theme.colors.button};
    padding: 8px;
    cursor:pointer;

    .more {
        padding:10px;
        margin-right:5px;
        background:${({ theme }) => theme.colors.rawblack};
        color:${({ theme }) => theme.colors.white};
    }

    p {
        color: ${({ theme }) => theme.colors.rawblack};
        font-weight:${({theme}) => theme.fontWeight.fw_2};
    }
`