import styled from "styled-components";


export const BannerContainer = styled.div`
    width:100%;
    background-color: ${({ theme }) => theme.colors.lightblack};

    .content {
        width:100%;
        margin:40px 0
    }

    @media screen and (max-width:${({ theme }) => theme.responsive.mobile}) {
        text-align:center;
    }
`

export const Input = styled.input`
    padding:12px ;
    width:40%;
    background-color: ${({ theme }) => theme.colors.rawblack};
    color:${({ theme }) => theme.colors.white};
    font-size:${({ theme }) => theme.fontSize.fz_1};
    border:none;
`

export const Submit = styled.input`
    background:${({ theme }) => theme.colors.button};
    padding:12px;
    margin-left:10px;
    border:none;
    font-size:${({ theme }) => theme.fontSize.fz_1};
    font-weight:${({ theme }) => theme.fontWeight.fw_3};
`

