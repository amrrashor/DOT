import styled from "styled-components";

export const GalleryBanner = styled.div`
    width:100%;
    background-color: ${({ theme }) => theme.colors.rawblack};
    padding:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    form {
        display:flex;

        @media screen and (max-width:992px) {
            flex-direction:column;
        }
    }
    
    .first,
    .second{
        width:50%;
        margin:4px;

        @media screen and (max-width:992px) {
            width:100%;;
        }
    }

    input,
    textarea{
        background:${({ theme }) => theme.colors.rawblack};
        border-color:${({ theme }) => theme.colors.button};
        padding:15px 15px;
        color:${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.fz_1};
        border-radius: ${({ theme }) => theme.brderRadi.borderRadius_2};
        ::placeholder {
            text-transform:capitalize;
            color:${({ theme }) => theme.colors.white};
            font-size: ${({theme}) => theme.fontSize.fz_1};
        }
    }
    
    input:last-child {
        margin:10px 0 0 0
    }

    a{
        text-align:center;
        margin:10px 0 0 0;
    }
`