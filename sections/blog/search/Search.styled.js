import styled from "styled-components";


export const SearchContainer = styled.div`
    width: 100%;
    margin-bottom:20px;
    margin-top:50px;
`
export const Content = styled.div`
    display:flex;
    
    @media screen and (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-top:20px;
    }
`
export const Input = styled.input`
    background-color:${({ theme }) => theme.colors.rawblack};
    outline:none;
    border:none;
    width:100%;
    padding:12px;
    color:${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.fz_1};
`

export const SearchIcon = styled.div`
    border:none;
    outline:none;
    background:none;
    color:${({ theme }) => theme.colors.button};
    font-size: ${({ theme }) => theme.fontSize.fz_1};
    background-color:${({ theme }) => theme.colors.rawblack};
    padding:12px;
`

